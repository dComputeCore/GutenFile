import {
  Buckets,
  KeyInfo,
  PrivateKey,
  WithKeyInfoOptions,
  Client,
  ThreadID,
} from '@textile/hub';

import { GutenbergBook } from './gutenbergFil';

const threadID = 'bafk63s6q5sybugcvs4drbrncsveg6oyjqwnw7yxpi7ndma7mok7vahy';
const userKey = PrivateKey.fromString(process.env.REACT_APP_USER_KEY as string);
//const dbName = 'gutenbergDB';
const collectionName = 'gutenbergbooks';

const keyInfo: KeyInfo = {
  key: process.env.REACT_APP_API_KEY as string
};

const keyInfoOptions: WithKeyInfoOptions = {
  debug: false
};

export class TextileStore {  
  private client: Client;
  private bucket: Buckets;

  private ipfsGateway = 'https://hub.textile.io';

  private static singletonInstace: TextileStore;

  public static async getInstance(): Promise<TextileStore> {
    if (!TextileStore.singletonInstace) {
      TextileStore.singletonInstace = new TextileStore();
      await TextileStore.singletonInstace.init();
    }

    return TextileStore.singletonInstace;
  }

  private async init() {
    this.bucket = await Buckets.withKeyInfo(keyInfo, keyInfoOptions);
    this.bucket.getToken(userKey);

    this.client = await Client.withKeyInfo(keyInfo);
    await this.client.getToken(userKey);
  }

  public async getAllBooks(): Promise<GutenbergBook[]> {
    const ebooks = await this.client.find<GutenbergBook>(ThreadID.fromString(threadID), collectionName, {});

    return ebooks;
  }

  // public async uploadTextFile(file: File): Promise<FileMetadata> {
  //   const now = new Date().getTime();
  //   const fileName = `${file.name}`;
  //   const uploadName = `${now}_${fileName}`;
  //   const fileLocation = `text/${uploadName}`;

  //   const rawFile = await this.bucketInfo.bucket.pushPath(
  //     this.bucketInfo.bucketKey,
  //     fileLocation,
  //     file.stream()
  //   );

  //   //await this.client.create(this.threadID, 'creator', [pair]);

  //   return {
  //     cid: rawFile.path.cid.toString(),
  //     bookName: fileName,
  //     bucketPath: fileLocation,
  //     bucketName: '',
  //     date: now.toString(),
  //   }
  // }

  // public async uploadAudioFile(file: File, instanceID: string) {
  //   const now = new Date().getTime();
  //   const fileName = `${file.name}`;
  //   const uploadName = `${now}_${fileName}`;
  //   const fileLocation = `audio/${uploadName}`;

  //   await this.bucketInfo.bucket.pushPath(
  //     this.bucketInfo.bucketKey,
  //     fileLocation,
  //     file.stream()
  //   );

  //   // update collection with audio file details with instanceID
  // }
}
