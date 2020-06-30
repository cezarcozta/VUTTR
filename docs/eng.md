tools {
  id: string;
  title: string;
  url: string;
  description: string;
  tags: [
    {
      id: string;
      title: string;
    }
  ]
}

tools {
  id: "a1b2c3",
  title: "Notion"
  url: "https://notion.so"
  description: "Notion is greate"
  tags: [
    {
      id: "a2b3c4",
      title: "organization"
    },
    {
      id: "a2b4c5",
      title: "planning"
    },
    {
      id: "a2b5c6",
      title: "colaboration"
    },
  ]
}
----------------------
tools {
  id: "a2b3c4",
  title: "Whimscal"
  url: "https://whimscal.go"
  description: "Whimscal is coooool"
  tags: [
    {
      id: "a2b3c4",
      title: "organization"
    },
    {
      id: "a2b4c5",
      title: "prototyping"
    },
    {
      id: "a2b5c6",
      title: "drawing"
    },
  ]
}


tags {
  id: string;
  title: string;
  tools: [
    {
      id: string;
      title: string;
      url: string;
      description: string;
    }
  ]
}

tags: {
  id: "a2b3c4",
  title: "organization"
  tools: [
     {
      id: "a2b3c4",
      title: "Whimscal"
      url: "https://whimscal.go"
      description: "Whimscal is coooool"
     },
     {
      id: "a1b2c3",
      title: "Notion"
      url: "https://notion.so"
      description: "Notion is greate"
     }
  ]
}

tags: {
  id: "a2b4c5",
  title: "planing"
  tools: [
     {
      id: "a1b2c3",
      title: "Notion"
      url: "https://notion.so"
      description: "Notion is greate"
     }
  ]
}

tags: {
  id: "a2b4c5",
  title: "colaboration"
  tools: [
     {
      id: "a1b2c3",
      title: "Notion"
      url: "https://notion.so"
      description: "Notion is greate"
     }
  ]
}

tags: {
  id: "a2b4c5",
  title: "prototyping"
  tools: [
     {
      id: "a2b3c4",
      title: "Whimscal"
      url: "https://whimscal.go"
      description: "Whimscal is coooool"
     }
  ]
}

tags: {
  id: "a2b4c6",
  title: "drawing"
  tools: [
     {
      id: "a2b3c4",
      title: "Whimscal"
      url: "https://whimscal.go"
      description: "Whimscal is coooool"
     }
  ]
}
