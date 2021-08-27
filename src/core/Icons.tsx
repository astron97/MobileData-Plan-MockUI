import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export const SearchIcon = (props: {
  color: string | undefined;
  size: number | undefined;
}) => (
  <FontAwesomeIcon
    icon={faSearch}
    color={props.color !== undefined ? props.color : 'white'}
    size={props.size !== undefined ? props.size : 10}
  />
);

export const ClearIcon = (props: {
  color: string | undefined;
  size: number | undefined;
}) => (
  <FontAwesomeIcon
    icon={faTimesCircle}
    color={props.color !== undefined ? props.color : 'white'}
    size={props.size !== undefined ? props.size : 10}
  />
);
