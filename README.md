
# VUTTR

## API Rest

### Tech and Tools

- JS + TS
- Nodejs + Express
- Postgres + TypeORM
- ESLint + Prettier
- JSONWebToken
- Tsyringe
- Class Transformer
- BCryptJS
- Celebrate
- Jest
- VSCode
- Yarn

## Get Start

  > clone repo: git clone https://github.com/cezarcozta/VUTTR.git
  > create postgres database:
    > Database name: vuttr
    > owner: postgres
  > yarn
  > yarn dev:server

----------------------------------------------------------------------------

### GET Tag

- REQUEST:
  - http://localhost:3000/tags
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
    http://localhost:3000/tags

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
    http://localhost:3000/tags/UUID

    ```json
    {
      "title": "UpdateTag",
    }
  ```

- RESPONSE:
  204 No Content

### DELETE TAG

- REQUEST:
    http://localhost:3000/tags/UUID

- RESPONSE:
    204 No Content

### GET Tools

- REQUEST:
    http://localhost:3000/tools

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
    http://localhost:3000/tools?tags=coding

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
    http://localhost:3000/tools

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
**tags must exists before create tool**

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
    http://localhost:3000/tools/UUID

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
    http://locahost:3000/tools/UUID

- RESPONSE:
    204 No Content
