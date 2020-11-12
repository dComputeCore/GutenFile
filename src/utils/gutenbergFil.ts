export interface GutenbergFILSchema {
  deal_id: number,
  miner_id: string,
  payload_cid: string,
  filename: string,
  file_format: string,
  size_in_bytes: number,
  date: string,
  curated_dataset_if_applicable: string
}

export interface GutenbergBook {
  _id: string,
  bookName: string,
  txtCreatedOn: number,
  txtCID: string,
  txtBucketName: string,
  txtIPFSPath: string,
  txtSize: number,
  txtFILDealId?: number
  txtFILMinerId?: Array<string>,
  txtFILPayloadCID?: string,
  txtFILFileName?: string
  txtFILSize?: number,
  txtFILDate?: string
  audCreatedOn?: number,
  audCID?: string,
  audBucketName?: string,
  audIPFSPath?: string,
  audSize?: string
}

export const schema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'booksmetadata',
  type: 'object',
  required: ['bookName', 'txtCreatedOn', 'txtCID', 'txtBucketName', 'txtIPFSPath', 'txtSize'],
  properties: {
    _id: {
      type: 'string',
      description: "The instance's id.",
    },
    bookName: { type: 'string' },
    txtCreatedOn: { type: 'integer' },
    txtCID: { type: 'string' },
    txtBucketName: { type: 'string' },
    txtIPFSPath: { type: 'string' },
    txtSize: { type: 'number' },
    txtFILDealId: { type: 'integer' },
    txtFILMinerId: {
      "type": "array",
      "description": "Filecoin miner id.",
      "items": {
        "type": "string"
      }
    },
    txtFILPayloadCID: { type: 'string' },
    txtFILFileName: { type: 'string' },
    txtFILSize: { type: 'integer' },
    txtFILDate: { type: 'string' },
    audCreatedOn: { type: 'integer' },
    audCID: { type: 'string' },
    audBucketName: { type: 'string' },
    audIPFSPath: { type: 'string' },
    audSize: { type: 'string' }
  },
};

export const ebookBucketList = [
  'gutenberg_af',
  'gutenberg_ag',
  'gutenberg_ah',
  'gutenberg_ai',
  'gutenberg_aj',
  'gutenberg_ak',
  'gutenberg_al',
  'gutenberg_am',
  'gutenberg_an',
  'gutenberg_ao',
  'gutenberg_ap',
  'gutenberg_aq',
  'gutenberg_ar',
  'gutenberg_as',
  'gutenberg_at',
  'gutenberg_au',
  'gutenberg_av',
  'gutenberg_aw',
  'gutenberg_ax',
  'gutenberg_ay',
  'gutenberg_az',
  'gutenberg_ba',
  'gutenberg_bb',
  'gutenberg_bc',
  'gutenberg_bd',
  'gutenberg_be',
  'gutenberg_bf',
  'gutenberg_bg',
  'gutenberg_bh',
  'gutenberg_bi',
  'gutenberg_bj',
  'gutenberg_bk',
  'gutenberg_bl',
  'gutenberg_bm',
  'gutenberg_bn',
  'gutenberg_bo',
  'gutenberg_bp',
  'gutenberg_bq',
  'gutenberg_br',
  'gutenberg_bs',
  'gutenberg_bt',
  'gutenberg_bu',
  'gutenberg_bv',
  'gutenberg_bw',
  'gutenberg_bx',
  'gutenberg_by',
  'gutenberg_bz',
  'gutenberg_ca',
  'gutenberg_cb',
  'gutenberg_cc',
  'gutenberg_cd',
  'gutenberg_ce',
  'gutenberg_cf',
  'gutenberg_cg',
  'gutenberg_ch',
  'gutenberg_ci',
  'gutenberg_cj',
  'gutenberg_ck',
  'gutenberg_cl',
  'gutenberg_cm',
  'gutenberg_cn',
  'gutenberg_co',
  'gutenberg_cp',
  'gutenberg_cq',
  'gutenberg_cr',
  'gutenberg_cs',
  'gutenberg_ct',
  'gutenberg_cu',
  'gutenberg_cv',
  'gutenberg_cw',
  'gutenberg_cx',
  'gutenberg_cy',
  'gutenberg_cz',
  'gutenberg_da',
  'gutenberg_db',
  'gutenberg_dc',
  'gutenberg_dd',
  'gutenberg_de',
  'gutenberg_df',
  'gutenberg_dg',
  'gutenberg_dh',
  'gutenberg_di',
  'gutenberg_dj',
  'gutenberg_dk',
  'gutenberg_dl',
  'gutenberg_dm',
  'gutenberg_dn',
  'gutenberg_do',
  'gutenberg_dp',
  'gutenberg_dq'
];

export const gutenbergFilData: Array<GutenbergFILSchema> = [
  {
    "deal_id": 723283,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgTG3qLI30x5LbTlTCc9+IYLZXdk2OfY/f+PyK4q+4KlM",
    "filename": "gutenberg_aa.tar",
    "file_format": "tar",
    "size_in_bytes": 4194304,
    "date": "15/10/2020 15:28",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 723511,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgqF6NmFIb+FEUp5Oy5yq18uJy06r8a9g/q7sc1dtdTYM",
    "filename": "gutenberg_ac.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "15/10/2020 15:41",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 723583,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgBhWjdU8KhmxRslROgzTsxrDcv5x59aly8BzyL2uq6SU",
    "filename": "gutenberg_ad.tar",
    "file_format": "tar",
    "size_in_bytes": 536870912,
    "date": "15/10/2020 15:45",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 723582,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg719yUYNmW+mr7OedVLmyxZG0F7iaiOn4xwYLdLbwuqg",
    "filename": "gutenberg_af.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "15/10/2020 15:45",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 723589,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgxbCGpPFh/GNsFHRaRJld8VVUkGlculLSf3mNDYx/YD0",
    "filename": "gutenberg_ag.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "15/10/2020 15:46",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 723590,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgs8TMcG1t8x6pAsG4MkSA7myOJkQT6OQYlaeZU/UU4LQ",
    "filename": "gutenberg_ah.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "15/10/2020 15:46",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 723599,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgZYzVJiMZGZsq1v2L7NzPnrQ/wkq9Jtkh7qmm2Iw9tf4",
    "filename": "gutenberg_ai.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "15/10/2020 15:46",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771705,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgJMSO7BTyB9k1rkY99gmOmhucTo1QjJ8p7x3sW7HdIgw",
    "filename": "gutenberg_ak.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:12",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771740,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgqkiJ730xqR7jBXbDUBI+pvepi2hT/hRIkeGdKusy120",
    "filename": "gutenberg_am.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:12",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771741,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgYsQuDPx3HEjoCZsx+JnulBnXryTE2lkwpO74OL13nQo",
    "filename": "gutenberg_ao.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:12",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771744,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgniW3goMmMF4UGCimnDEnA/2QzucJsp/mHMQMu+/jjpo",
    "filename": "gutenberg_aq.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:12",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771747,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg6/BfeTrMIiIEcXWgB9HkJpruH2jwQJezkOQXLYDWMN8",
    "filename": "gutenberg_as.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:12",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771831,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgJO147OjTXXkjcTUerLZaU9pv84Bo+agN7KRBzWxMkAw",
    "filename": "gutenberg_at.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:17",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771832,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgp9Fk7hUVrDTmF+iHkXpAvTY1H0WErBYcYcz6SN2ucQo",
    "filename": "gutenberg_au.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:17",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771835,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg4DamJkzLh65Fb6epkvwqv1w1E4PqofNvWBiOJnQvMEU",
    "filename": "gutenberg_av.tar",
    "file_format": "tar",
    "size_in_bytes": 536870912,
    "date": "16/10/2020 23:17",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771834,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgNM+7E5DrPiRw6y5Iz77eivpQQF84tCW8JMCgSodrUwA",
    "filename": "gutenberg_aw.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:17",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771833,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgezDSPUWoOZ01Kf6I6/JMgVe3NukNe5Z9VGiNoumSrQw",
    "filename": "gutenberg_ax.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:17",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771843,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgMkYZLaVzXuPJJaFCAaDeG2GSR22uLmvp8Uxe1KLKxCQ",
    "filename": "gutenberg_ay.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:17",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771841,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg2B1NVaUjulxnOvaYY29TV8+3YmphecWQM2gpNffpthc",
    "filename": "gutenberg_az.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771842,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgWnY+ORO3TserMkNQ8/E/8NeOSe5qpnldh+gbVBKpH9o",
    "filename": "gutenberg_ba.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771840,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgncwDFln7E40tplGOdmJcK0p01guFqzS87N+pPf3ZuYQ",
    "filename": "gutenberg_bb.tar",
    "file_format": "tar",
    "size_in_bytes": 134217728,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771845,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgef9f8tQrTMljAtTtoPxEzw1VHkRK+K/s/wr7HbIzb6o",
    "filename": "gutenberg_bc.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771856,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgNAqzfNO9D0sUk4In01XVWFlj5/jgAeEifSdNb9Gv0Mc",
    "filename": "gutenberg_bd.tar",
    "file_format": "tar",
    "size_in_bytes": 536870912,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771852,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgNYOzccQjSoL266fBnvVP3EOdjOFZRBkCKgDnUZgOg4I",
    "filename": "gutenberg_be.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771851,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgtkn80E0HSUTxl0Ns5U9zgtnyMqv6HYHeizbBz9cVa4k",
    "filename": "gutenberg_bf.tar",
    "file_format": "tar",
    "size_in_bytes": 134217728,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771854,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgxMoFT0zcqp+8SagMVbkmiLR1RWUNuSVeXBlNA5IzM0A",
    "filename": "gutenberg_bg.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771855,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgmLBDRlSilYpd9WfHPuEbqA7ub8PPJa9kXPVegqihlg0",
    "filename": "gutenberg_bh.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771853,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgXHuc+ntWpaW62z1Oy6ks8IxCsIzEC8a2yUAwHR9tlVQ",
    "filename": "gutenberg_bi.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:18",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771866,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgqzLck/0z58CKLk9OujzspXYYajIU1eDpEwh7Gjy3OeQ",
    "filename": "gutenberg_bj.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771865,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgwZGt4au2k4HeHyNKmq15NnGukLrb+ifqD3d5YmFw+MI",
    "filename": "gutenberg_bk.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771864,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgWZactBwjgpV2ut1UhRRJOdX+H2J3mikOq+7A3sIPccI",
    "filename": "gutenberg_bl.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771877,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgo6JubYvt/oHu95meo2kzghmijUaCRoQhIT8T+HZBFnA",
    "filename": "gutenberg_bm.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771876,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgZc94wMV4g0LRP0VOz1taBXpekXhvTMfR/Q9t7i52Un4",
    "filename": "gutenberg_bn.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771878,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgCpkb3JUwUoSGG9NOKL2+cldp86CYViS6X0PTgJhztIQ",
    "filename": "gutenberg_bo.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771873,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIggFItJkXaJhMOXSUOrdx9uWdMPBsBDkcTB+0gujRoU6Q",
    "filename": "gutenberg_bp.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771875,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg9eruDPZGIH7jM4pyvPNXXdv71U2lcvJA27FZgevrPVM",
    "filename": "gutenberg_bq.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771872,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg2VJtGX+P6iNO5cllkelWKzSKA7QWx+xcjnb4VcA4UsE",
    "filename": "gutenberg_br.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771884,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgv1JdyBUnID4rgY56JDpKg4vY41XxNdOeT1gVO/eDehs",
    "filename": "gutenberg_bs.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:19",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771812,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgoYdreDlzp317gGaX5uLOlsSKavCLJCLZuMTt2g48JZY",
    "filename": "gutenberg_bt.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771887,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgxJG4aSe+mJdNII4nUlEJ+q2xMzN3mTshpvf44aUmnGE",
    "filename": "gutenberg_bu.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771888,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgu3KTNt9qUGHvmARn0gBO/Gnak/eRkiB4edG5KcnLXPU",
    "filename": "gutenberg_bv.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771885,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg5rsx1EeZKMrQyZ4t0ONKrgX/KSUF+ECiqKNeknZyfh8",
    "filename": "gutenberg_bw.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771886,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgYJ+SyP/jtWatatJEO9Erlkq+DMl4t9TI8lCmv55cRLg",
    "filename": "gutenberg_bx.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771889,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgQgHRucjKglVBRzbkRqt7v+5STHO64rF4n5Gvq1oroWk",
    "filename": "gutenberg_by.tar",
    "file_format": "tar",
    "size_in_bytes": 67108864,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771892,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgMKqRQvEVnRXk7VmyavXNZPvhPAeNN88Y819WEPhyMNQ",
    "filename": "gutenberg_bz.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771890,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgw0jkIcQi4nvziuFQhQ/k0TvAGtXsn3JZ9GCBjAT/w+k",
    "filename": "gutenberg_ca.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771891,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg3+8IZh2B7B1PW/t/aVpx4+yiY0ZLdarIQlBGPqNHKFo",
    "filename": "gutenberg_cb.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771894,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgnbOikKjWTOMe4yl9yHt9TAw93Oaych7q0pX7Lst87Xw",
    "filename": "gutenberg_cc.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771893,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgXeA8LQNCKwtPw44Fnev1sL64eLObA4Cfype3GzA+kwI",
    "filename": "gutenberg_cd.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:20",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771825,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgFf21M0FyYdRujalnCAkBZn28AjgN9s1D1UYxMmexGkQ",
    "filename": "gutenberg_ce.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771908,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgfLr419ZRrBFcY3FzMweRx1HG7wk9uxdt22c9e3g0GB0",
    "filename": "gutenberg_cf.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771909,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgesr9fP+6LBwU+nnTg38GNtIS4T9Y7HoBCT/AXD8GuEo",
    "filename": "gutenberg_cg.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771910,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIge/6+4SYrBhTB7iE5i3uB2ab2DlB3qQTBLLo3RlNd7H4",
    "filename": "gutenberg_ch.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771916,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgK++swkz8spx8FQ19Pny4ILUN36j7aM6Eun9nMbpGGH8",
    "filename": "gutenberg_ci.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771920,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgglfrm++TQgRIBE2us7fVQ55CLHZB/gpxUrmyhv/s/OI",
    "filename": "gutenberg_cj.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771917,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgOCABqACO6s7Mpx328XVRY8YL+tVJwSMtzd4415HF/6M",
    "filename": "gutenberg_ck.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 771919,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgrhf/NI2OCH58kYnlyjcZcSBRdPTIXV2XWUoCig+pk34",
    "filename": "gutenberg_cl.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "16/10/2020 23:21",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 797024,
    "miner_id": "f02576",
    "payload_cid": "mAXCg5AIgTG3qLI30x5LbTlTCc9+IYLZXdk2OfY/f+PyK4q+4KlM",
    "filename": "gutenberg_cm.tar",
    "file_format": "tar",
    "size_in_bytes": 4194304,
    "date": "17/10/2020 19:39",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 801100,
    "miner_id": "f014409",
    "payload_cid": "mAXCg5AIgTG3qLI30x5LbTlTCc9+IYLZXdk2OfY/f+PyK4q+4KlM",
    "filename": "gutenberg_cn.tar",
    "file_format": "tar",
    "size_in_bytes": 4194304,
    "date": "17/10/2020 23:24",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847816,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgyxS6wsjNzggmP0Q+CfYd1EwZyHWHpJHZ6u488okUvKE",
    "filename": "gutenberg_co.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:50",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847821,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgEe/qwSSPkc4/8hfmQ/GTEgMKyJWuftSFmYfIuky8ChU",
    "filename": "gutenberg_cp.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847826,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgmv2bnhWP0RFVUEu6/v6VLCqA95sBgEoO/o1LClBjnoY",
    "filename": "gutenberg_cq.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847827,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgPdPNpIj8QllOGPxJeTBo+4hV0EcS8qF3l1+y8pfFIdA",
    "filename": "gutenberg_cr.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847828,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIge51zFgf2/HEu3tcuYhslZLZ10lErns0O0JMc7npBVpg",
    "filename": "gutenberg_cs.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847834,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgWYii/bOofrFN9Bov8oJUTDiJaCJjjpwEtSrKYVU3BUE",
    "filename": "gutenberg_ct.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847887,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgxAK+I7cwEeMGZUuXaL5iUsENbRx6zQhjJ2VbX86TqwE",
    "filename": "gutenberg_cu.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847881,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgkiNwo4vo3L/3GNxYW76klRUY+f10+oC9BgbkURxnuiU",
    "filename": "gutenberg_cv.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847893,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIguZBRDmWpB+SO0uehByTVG5fcYiN5pt+XkwKirg52xSM",
    "filename": "gutenberg_cw.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847901,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgejp1WzCzs9kq/kYMMfXHXCjAZb0s0zqXPLYQl63IvZE",
    "filename": "gutenberg_cx.tar",
    "file_format": "tar",
    "size_in_bytes": 536870912,
    "date": "19/10/2020 17:51",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847889,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgPZt03i/pR7NcqZqtbXSVDmSLpLpJEpy0hXl7KbmmoXQ",
    "filename": "gutenberg_cy.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847892,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgYCEwRrhG+nY1D/kYrNAuFRQSrwwEe+WZUefxmP3YZ3Y",
    "filename": "gutenberg_cz.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847899,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg8z0E2mAZAOes+4hkfG98sIUkUv1XFRVzDHWe3/0j8X4",
    "filename": "gutenberg_da.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847900,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgrmBI56xqZalRzhnxVtLEi8YIVN6BAX0RVbiVH0ihNf0",
    "filename": "gutenberg_db.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847891,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIglxEUI9sm0Tzw9HVsHndx/g4i3hzye5qQq9iMfX70/vg",
    "filename": "gutenberg_dc.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847910,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg8opDwRewxRjlYKjw3lC0XD7RpncU+B3HlgbxgOc8Ko8",
    "filename": "gutenberg_dc.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847845,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg+nBN1fxcdpgTXiiedg1HlZsgPhnD0a2bEHqZiAqoDjg",
    "filename": "gutenberg_dc.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847911,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgR2kYHrarNIbKtdI4WaXdCd5r2hjOC5YF3E3u77cw2eA",
    "filename": "gutenberg_dd.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:52",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847869,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgR2kYHrarNIbKtdI4WaXdCd5r2hjOC5YF3E3u77cw2eA",
    "filename": "gutenberg_de.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:54",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847936,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgg5i7sQE1ntaa7v95fGWXxe+Lo8omBYeqvd5TqbL0CmQ",
    "filename": "gutenberg_df.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:54",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847939,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIg1Ds0Cax44gLHgEmIHSrIiyzbcDxcDqm3lkOT/CiWSQ8",
    "filename": "gutenberg_dg.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:54",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847935,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgcXAYgeJY9871ODON2GthELUPYoxbM8kfeGfz7qTGC9Y",
    "filename": "gutenberg_dh.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:54",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847947,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgjAyyoZgrbqsJeLeEWNIrlMPwg9E7H3nNOGc741TgetM",
    "filename": "gutenberg_di.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:54",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847948,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgPnTW5qFLwv4U0XiR8RlvWWlwn0S04sQ/929Les2Kc+M",
    "filename": "index.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:54",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847946,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgPnyixg2M6tPu6jleUriDzVin7R6x7PC5l88lPArwxcs",
    "filename": "index.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:54",
    "curated_dataset_if_applicable": "Project Gutenberg"
  },
  {
    "deal_id": 847992,
    "miner_id": "f010479",
    "payload_cid": "mAXCg5AIgR2kYHrarNIbKtdI4WaXdCd5r2hjOC5YF3E3u77cw2eA",
    "filename": "index.tar",
    "file_format": "tar",
    "size_in_bytes": 268435456,
    "date": "19/10/2020 17:58",
    "curated_dataset_if_applicable": "Project Gutenberg"
  }
];
