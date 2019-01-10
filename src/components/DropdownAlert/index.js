import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DropdownAlert from 'react-native-dropdownalert';

// At this point Theme cannot be imported from styled components, since it's a hoc of ThemeProvider
import theme from 'src/assets/theme';
import DropDownHolder from './holder';

class DropdownAlertComponent extends Component {
  render() {
    const { children } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {React.Children.only(children)}

        <DropdownAlert
          ref={(ref) => { DropDownHolder.setDropDown(ref); }}
          titleStyle={{
            fontFamily: theme.font.family.primary.regular,
            fontSize: theme.font.size.normal,
            color: theme.colors.white,
            alignSelf: 'center',
          }}
          height={150}
          successColor={theme.colors.primary}
          warnColor={theme.colors.danger}
          renderImage={() => {}}
          titleNumOfLines={2}
        />
      </View>
    );
  }
}

DropdownAlertComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DropdownAlertComponent;
