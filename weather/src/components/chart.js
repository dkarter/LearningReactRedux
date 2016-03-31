import _ from 'lodash';
import React, { PropTypes } from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesBars,
  SparklinesReferenceLine,
} from 'react-sparklines';

const Chart = (props) => {
  const fill = props.fill || "#41c3f9";
  const stroke = props.stroke || "white";
  const avg =
    _.round(props.data.reduce((prev, curr) => prev + curr) / props.data.length);


  return (
    <div>
      <Sparklines data={props.data}>
        <SparklinesBars style={{ stroke, fill }} />
        <SparklinesReferenceLine type="avg" />
        <SparklinesLine />
      </Sparklines>
      <div>{`${avg} ${props.unit}`}</div>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.array.isRequired,
  unit: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

export default Chart;
