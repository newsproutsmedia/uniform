import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grommet,
} from 'grommet';
import theme from '../../theme';
import positiveIcon from './smileyPositive.png';
import negativeIcon from './smileyNegative.png';
import neutralIcon from './smileyNeutral.png';
import totalIcon from './npsTotalIcon.png';
import Icon from './Icon';

function CalculatorGroupContainer({ type, children }) {
  const groupType = {
    positive: {
      color: theme.global.colors.green,
      border: theme.global.colors.kermit,
      icon: positiveIcon,
    },
    neutral: {
      color: theme.global.colors.grey,
      border: theme.global.colors.dorian,
      icon: neutralIcon,
    },
    negative: {
      color: theme.global.colors.red,
      border: theme.global.colors.sedona,
      icon: negativeIcon,
    },
    total: {
      color: theme.global.colors.grey,
      border: theme.global.colors.grey,
      icon: totalIcon,
    },
  };

  const iconStyle = {
    position: 'relative',
    top: '-24px',
  };

  return (
    <Grommet theme={theme}>
      <Box
        width="100%"
        height="150px"
        round="4px"
        background="#ffffff"
        border={{
          color: groupType[type].border,
          size: '1px',
          style: 'solid',
          side: 'all',
        }}
        style={{ color: groupType[type].color }}
        direction="column"
        justify="top"
      >
        <Box
          width="100%"
          direction="row"
          justify="center"
          style={iconStyle}
        >
          <Icon icon={groupType[type].icon} width="48" height="48" />
        </Box>
        {children}
      </Box>
    </Grommet>
  );
}

export default CalculatorGroupContainer;

CalculatorGroupContainer.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
