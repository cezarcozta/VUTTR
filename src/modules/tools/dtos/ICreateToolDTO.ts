interface ITag {
  id: string;
  title: string;
}

export default interface ICreateToolDTO {
  title: string;
  url: string;
  description: string;
  tags: ITag[];
}
