/* eslint-disable camelcase */
interface ITag {
  tag_id: string;
  tag_title: string;
}

export default interface ICreateToolDTO {
  title: string;
  url: string;
  description: string;
  tags: ITag[];
}
