import { DateTime } from 'luxon';
import PropTypes from 'prop-types';

const TimeStamp = (props) => {
  const compTime = DateTime.fromISO(props.time);
  const absolute = compTime.toFormat('MMMM Do YYYY, h:mm:ss a');
  const relative = compTime.toRelative();

  return <span className="entry-time" title={absolute}>{relative}</span>;
};

TimeStamp.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimeStamp;
