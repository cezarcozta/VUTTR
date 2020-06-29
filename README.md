# VUTTR
  - bossabox back-end challange
## API Rest
  **Tech and Tools**<br>
    - JS + TS<br>
    - Nodejs + Express<br>
    - Postgres + TypeORM<br>
    - ESLint + Prettier<br>
    - JSONWebToken<br>
    - Tsyringe<br>
    - Class Transformer<br>
    - BCryptJS<br>
    - Celebrate<br>
    - Jest<br>
    - VSCode<br>
    - Yarn<br>
## Get Start
  - clone repo: git clone https://github.com/cezarcozta/VUTTR.git
  - create postgres database:
    - Database name: vuttr
    - owner: postgres
  - yarn
  - yarn dev:server
----------------------------------------------------------------------------
GET Tag<br>
  - REQUEST:<br>
    http://localhost:3000/tags<br>
  - RESPONSE:<br>
    <code>[<br>
     {<br>
       "id": "d219ec44-2d8c-42b1-8671-e8ccc64671e6",<br>
       "title": "colaboration",<br>
       "created_at": "2020-06-19T00:17:23.475Z",<br>
       "updated_at": "2020-06-19T00:17:23.475Z"<br>
     },<br>
     {<br>
      "id": "c08935d8-36a1-4a33-bfbe-01706789f5de",<br>
      "title": "coding",<br>
      "created_at": "2020-06-19T00:41:54.151Z",<br>
      "updated_at": "2020-06-19T00:41:54.151Z"<br>
     },<br>
     {<br>
      "id": "bbe7ee9a-c1bd-4de8-82fb-5d2fba504efb",<br>
      "title": "design",<br>
      "created_at": "2020-06-20T19:18:35.070Z",<br>
      "updated_at": "2020-06-20T19:18:35.070Z"<br>
     },<br>
    ]</code><br>
<br>
POST Tag<br>
  - REQUEST:<br>
    http://localhost:3000/tags<br>
    {<br>
      "ittle": "design"<br>
    }<br>
<br>
  - RESPONSE:<br>
    {<br>
      "title": "design",<br>
      "id": "bbe7ee9a-c1bd-4de8-82fb-5d2fba504efb",<br>
      "created_at": "2020-06-20T19:18:35.070Z",<br>
      "updated_at": "2020-06-20T19:18:35.070Z"<br>
    }<br>
<br>
PUT Tag<br>
  - REQUEST:<br>
    http://localhost:3000/tags/UUID<br>
    {<br>
      title: "UpdateTag",<br>
    }<br>
<br>
  - RESPONSE:<br>
    204 No Content<br>
<br>
DELETE TAG<br>
  - REQUEST:<br>
    http://localhost:3000/tags/UUID<br>
<br>
  - RESPONSE:<br>
    204 No Content<br>

------------------------------------------------------------------------------
GET Tools<br>
  - REQUEST:<br>
    http://localhost:3000/tools<br>
<br>
  - RESPONSE:<br>
    [<br>
      {<br>
        "id": "9f947937-4459-441a-a0ae-a37905b15879",<br>
        "title": "yarn10000",<br>
        "url": "www.y.COM",<br>
        "description": "descr....",<br>
        "tags": [<br>
          {<br>
            "tag_title": "planejamento"<br>
          }<br>
        ]<br>
      },<br>
      {<br>
        "id": "a842b9da-954f-42c4-b1df-b93664936e14",<br>
        "title": "TOOLX",<br>
        "url": "https://yarn.com",<br>
        "description": "Yarn is Huge",<br>
        "tags": [<br>
          {<br>
            "tag_title": "coding"<br>
          },<br>
          {<br>
            "tag_title": "planejamento"<br>
          }<br>
        ]<br>
      },<br>
      {<br>
        "id": "a322c565-9671-4ddc-8d5e-5e00e8ec0156",<br>
        "title": "yarn5",<br>
        "url": "www.YARN2.COM",<br>
        "description": "DESCR....",<br>
        "tags": [<br>
          {<br>
            "tag_title": "coding"<br>
          }<br>
        ]<br>
      },<br>
    ]<br>
<br>
GET Tools by TAG<br>
  - REQUEST:<br>
    http://localhost:3000/tools?tags=coding<br>
<br>
  - RESPONSE:<br>
    [<br>
      {<br>
        "id": "a322c565-9671-4ddc-8d5e-5e00e8ec0156",<br>
        "title": "yarn5",<br>
        "url": "www.YARN2.COM",<br>
        "description": "DESCR....",<br>
        "tags": [<br>
          {<br>
            "tag_title": "coding"<br>
          }<br>
        ]<br>
      },<br>
    ]<br>
<br>
POST Tool<br>
  - REQUEST:<br>
    http://localhost:3000/tools<br>
    {<br>
      "title": "Tool",<br>
      "url": "http://tool.com",<br>
      "description: "tool description...",<br>
      "tags": [<br>
        "tag01",<br>
        "tag02",<br>
      ]<br>
    }<br>
<br>
  - RESPONSE:<br>
    {<br>
      "title": "Tool",<br>
      "url": "https://tool.com",<br>
      "description": "tool description...",<br>
      "tags": [<br>
        {<br>
          "tag_title": "tag01"<br>
        },<br>
        {<br>
          "tag_title": "tag02"<br>
        }<br>
      ],<br>
      "id": "a842b9da-954f-42c4-b1df-b93664936e14"<br>
    }<br>
**tags must exists before create tool**<br>
<br>
PUT Tool<br>
  - REQUEST:<br>
    http://localhost:3000/tools/UUID<br>
    {<br>
	    "title": "updatedToolTitle",<br>
	    "url": "updatedToolURL",<br>
	    "description": "update description...."<br>
    }<br>
<br>
  - RESPONSE:<br>
    204 No Content<br>
<br>
DELETE Tool<br>
  - REQUEST:<br>
    http://locahost:3000/tools/UUID<br>
  - RESPONSE:<br>
    204 No Content<br>

