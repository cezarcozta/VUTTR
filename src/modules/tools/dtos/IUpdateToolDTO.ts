/* eslint-disable camelcase */
interface ITag {
  tag_title: string;
}

export default interface IUpdateToolDTO {
  title: string;
  url: string;
  description: string;
  tags: ITag[];
}
