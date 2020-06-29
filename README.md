
# VUTTR

## API Rest

### Tech and Tools

- **Language:** TS
- **Back-end:** Nodejs + Express
- **Database:** Postgres + TypeORM
- ESLint + Prettier
- JSONWebToken
- Tsyringe
- Class Transformer
- BCryptJS
- Celebrate
- VSCode
- Yarn
- **Tests:** Jest
- **Operational System:** Linux

## Getting Started

>Pré-requisitos: yarn package manager.

- Clone Repositório.

`
git clone [https://github.com/cezarcozta/VUTTR.git]
`

- Acesse a pasta clonada e rode "yarn"

`
cd VUTTR

yarn
`

- Criar postgres database:
    Database name: vuttr
    owner: postgres

`
yarn dev:server
`

----------------------------------------------------------------------------

### POST User

- REQUEST:
  - /users

 ```json
  {
    "name":"cezar",
    "email": "cezar@gmail.com",
    "password": "123123",
  }
```

- REPONSE:

  ```json
  {
  "name": "cezar",
  "email": "cezar@gmail.com",
  "id": "8b405a22-3b52-4905-acda-d34d4f346f4d",
  "created_at": "2020-06-29T17:44:31.537Z",
  "updated_at": "2020-06-29T17:44:31.537Z"
  }
  ```

### POST Session

- REQUEST:
  - /sessions

 ```json
  {
   "email": "cezar@gmail.com",
   "password": "123123"
  }
```

- REPONSE:

  ```json
  {
  "user": {
    "id": "8b405a22-3b52-4905-acda-d34d4f346f4d",
    "name": "cezar",
    "email": "cezar@gmail.com",
    "created_at": "2020-06-29T17:44:31.537Z",
    "updated_at": "2020-06-29T17:44:31.537Z"
  },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTM0NDE4OTcsImV4cCI6MTU5MzUyODI5Nywic3ViIjoiOGI0MDVhMjItM2I1Mi00OTA1LWFjZGEtZDM0ZDRmMzQ2ZjRkIn0.OdMQqIZiMn_Md66Zii7uLPK1PKcycy3OKXregab1YUw"
  }
  ```

### GET Tag

- REQUEST:
  - /tags

- RESPONSE:

```json
    [
     {
       "id": "d219ec44-2d8c-42b1-8671-e8ccc64671e6",
       "title": "colaboration",
       "created_at": "2020-06-19T00:17:23.475Z",
       "updated_at": "2020-06-19T00:17:23.475Z"
     },
     {
      "id": "c08935d8-36a1-4a33-bfbe-01706789f5de",
      "title": "coding",
      "created_at": "2020-06-19T00:41:54.151Z",
      "updated_at": "2020-06-19T00:41:54.151Z"
     },
     {
      "id": "bbe7ee9a-c1bd-4de8-82fb-5d2fba504efb",
      "title": "design",
      "created_at": "2020-06-20T19:18:35.070Z",
      "updated_at": "2020-06-20T19:18:35.070Z"
     },
    ]
  ```

### POST Tag

- REQUEST:
  - /tags

  ```json
    {
     "tittle": "design"
    }
  ```

- RESPONSE:

    ```json
    {
      "title": "design",
      "id": "bbe7ee9a-c1bd-4de8-82fb-5d2fba504efb",
      "created_at": "2020-06-20T19:18:35.070Z",
      "updated_at": "2020-06-20T19:18:35.070Z"
    }
    ```

### PUT Tag

- REQUEST:
  - /tags/UUID

  ```json
    {
      "title": "UpdateTag",
    }
  ```

- RESPONSE:
  204 No Content

### DELETE TAG

- REQUEST:
    /tags/UUID

- RESPONSE:
    204 No Content

### GET Tools

- REQUEST:
  - /tools

- RESPONSE:

```json
    [
      {
        "id": "9f947937-4459-441a-a0ae-a37905b15879",
        "title": "yarn10000",
        "url": "www.y.COM",
        "description": "descr....",
        "tags": [
          {
            "tag_title": "planejamento"
          }
        ]
      },
      {
        "id": "a842b9da-954f-42c4-b1df-b93664936e14",
        "title": "TOOLX",
        "url": "https://yarn.com",
        "description": "Yarn is Huge",
        "tags": [
          {
            "tag_title": "coding"
          },
          {
            "tag_title": "planejamento"
          }
        ]
      },
      {
        "id": "a322c565-9671-4ddc-8d5e-5e00e8ec0156",
        "title": "yarn5",
        "url": "www.YARN2.COM",
        "description": "DESCR....",
        "tags": [
          {
            "tag_title": "coding"
          }
        ]
      },
    ]
```

### GET Tools by TAG

- REQUEST:
  - /tools?tags=coding

- RESPONSE:

```json
    [
      {
        "id": "a322c565-9671-4ddc-8d5e-5e00e8ec0156",
        "title": "yarn5",
        "url": "www.YARN2.COM",
        "description": "DESCR....",
        "tags": [
          {
            "tag_title": "coding"
          }
        ]
      },
    ]
```

### POST Tool

- REQUEST:
    /tools **tags must exists before create tool**

```json
    {
      "title": "Tool",
      "url": "http://tool.com",
      "description": "tool description...",
      "tags": [
        "tag01",
        "tag02",
      ]
    }
```

- RESPONSE:

```json
    {
      "title": "Tool",
      "url": "https://tool.com",
      "description": "tool description...",
      "tags": [
        {
          "tag_title": "tag01"
        },
        {
          "tag_title": "tag02"
        }
      ],
      "id": "a842b9da-954f-42c4-b1df-b93664936e14"
    }
```

### PUT Tool

- REQUEST:
  - /tools/UUID

 ```json
    {
      "title": "updatedToolTitle",
      "url": "updatedToolURL",
      "description": "update description...."
    }
```

- RESPONSE:
    204 No Content

### DELETE Tool

- REQUEST:
  - /tools/UUID

- RESPONSE:
    204 No Content
