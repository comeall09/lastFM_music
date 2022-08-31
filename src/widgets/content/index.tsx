import { IPreparedDataType } from "../../app/globalTypes";
import { Card } from "../card";
import { Wrap } from "./style";

export const Content: React.FC<{ data: IPreparedDataType[] }> = ({ data }) => {
  return (
    <Wrap>
      {data.map(({ image, title, subtitle, detail }) => (
        <Card key={image} image={image} title={title} subtitle={subtitle} detail={detail}/>
      ))}
    </Wrap>
  );
};