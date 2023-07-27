import { InputData } from "../interfaces/input-data.interface";

export const INPUT_DATA_EMPTY_MOCK: InputData = {
  assets: [],
  platforms: [],
  vulnerabilities: [],
};

export const INPUT_DATA_MOCK: InputData = {
  assets: [
    {
      id: "asset1",
      name: "Asset X",
      platformRelations: [
        {
          platformId: "platform1",
          minVersion: "1.5",
          maxVersion: "2.5",
        },
      ],
    },
    {
      id: "asset2",
      name: "Asset Y",
      platformRelations: [
        {
          platformId: "platform2",
          minVersion: "3.2",
          maxVersion: "4.5",
        },
      ],
    },
    {
      id: "asset3",
      name: "Asset Z",
      platformRelations: [
        {
          platformId: "platform3",
          minVersion: "5.0",
          maxVersion: "6.0",
        },
      ],
    },
    {
      id: "asset4",
      name: "Asset XX",
      platformRelations: [
        {
          platformId: "platform1",
          minVersion: "0.1",
          maxVersion: "0.2",
        },
      ],
    },
  ],
  platforms: [
    {
      id: "platform1",
      name: "Platform Alpha",
    },
    {
      id: "platform2",
      name: "Platform Beta",
    },
    {
      id: "platform3",
      name: "Platform Gamma",
    },
  ],
  vulnerabilities: [
    {
      id: "vuln1",
      name: "Security Vulnerability A",
      platformRelations: [
        {
          platformId: "platform1",
          minVersion: "1.0",
          maxVersion: "2.0",
        },
      ],
    },
    {
      id: "vuln2",
      name: "Security Vulnerability B",
      platformRelations: [
        {
          platformId: "platform2",
          minVersion: "3.0",
          maxVersion: "4.0",
        },
      ],
    },
    {
      id: "vuln3",
      name: "Security Vulnerability C",
      platformRelations: [
        {
          platformId: "platform1",
          minVersion: "2.5",
          maxVersion: "3.5",
        },
      ],
    },
  ],
};

export const INPUT_DATA_EMPTY_ENTRIES_MOCK: InputData = {
  assets: [
    {
      id: "asset1",
      name: "Asset X",
      platformRelations: [
        {
          platformId: "platform1",
          minVersion: "1.5",
          maxVersion: "2.5",
        },
      ],
    },
    {
      id: "asset2",
      name: "Asset Y",
      platformRelations: [
        {
          platformId: "platform2",
          minVersion: "3.2",
          maxVersion: "4.5",
        },
      ],
    },
    {
      id: "asset3",
      name: "Asset Z",
      platformRelations: [
        {
          platformId: "platform3",
          minVersion: "5.0",
          maxVersion: "6.0",
        },
      ],
    },
    {
      id: "asset4",
      name: "Asset XX",
      platformRelations: [
        {
          platformId: "platform1",
          maxVersion: "0.2",
        },
      ],
    },
  ],
  platforms: [
    {
      id: "platform1",
      name: "Platform Alpha",
    },
    {
      id: "platform2",
    },
    {
      name: "Platform Gamma",
    },
  ],
  vulnerabilities: [
    {
      id: "vuln1",
      name: "Security Vulnerability A",
      platformRelations: [
        {
          minVersion: "1.0",
          maxVersion: "2.0",
        },
      ],
    },
    {
      id: "vuln2",
      name: "Security Vulnerability B",
      platformRelations: [
        {
          minVersion: "3.0",
          maxVersion: "4.0",
        },
      ],
    },
    {
      id: "vuln3",
      name: "Security Vulnerability C",
      platformRelations: [
        {
          platformId: "platform1",
          minVersion: "2.5",
          maxVersion: "3.5",
        },
      ],
    },
  ],
} as InputData;
