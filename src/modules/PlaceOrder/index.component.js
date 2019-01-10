import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import {
  isDefaultFieldValid,
  isEmailValid,
  isPhoneValid,
  isNumberValid,
} from '../../utils/fieldValidation';
import assets from '../../assets/index';

import Button from '../../components/SweetShop/SweetShopButton/index';
import SmoothText from '../../components/Text/SmoothText/index';
import TextInput from '../../components/TextInput/index';
import { deviceIsPhone } from '../../utils/device';
import HeaderTitle from '../../components/SweetShop/SweetShopNavigationBar/index';
import HeaderComponent from '../components/HeaderComponent';

import {
  Content,
  Section,
} from './index.style';

const initialField = {
  value: '',
  isValid: false,
};

class PlaceOrderView extends React.PureComponent {
  static navigationOptions() {
    return ({
      headerTitle: <HeaderTitle alignItems="center" />,
    });
  }


  constructor(props) {
    super(props);

    const { sweetItem } = props;
    const { contactFormConfiguration } = sweetItem || {};
    const fields = {};

    if (contactFormConfiguration) {
      Object.keys(contactFormConfiguration).forEach((key) => {
        let field = contactFormConfiguration[key];

        field = {
          ...initialField,
          ...field,
        };

        fields[key] = field;
      });
    }

    const nextFields = { ...fields };

    this.state = {
      fields: nextFields,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.buttonIsDisabled = this.buttonIsDisabled.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.renderInputs = this.renderInputs.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { placingOrder, placedOrder, navigation } = nextProps;

    if (this.props.placingOrder && !placingOrder && placedOrder) {
      navigation.goBack();
    }
  }

  onSubmit() {
    const { placeOrder, sweetItem } = this.props;
    const { fields } = this.state;

    const message = {};

    Object.keys(fields).forEach((key) => {
      if (fields[key].type === 'tree' && fields[key].values) {
        Object.keys(fields[key].values).forEach((valueKey) => {
          message[valueKey] = fields[key].values[valueKey].value.toString();
        });
      } else {
        message[key] = fields[key].value.toString();
      }
    });

    placeOrder({ ...sweetItem, sweetId: sweetItem.id });
  }

  handleSetField(field, value, innerField) {
    let isValid = true;
    const { fields } = this.state;
    const item = fields[field];
    const { values, type } = item || {};

    const typeToValidate = (innerField && values && values[innerField] && values[innerField].type) || type;

    switch (typeToValidate) {
      case 'string':
      case 'long_string':
        isValid = isDefaultFieldValid(value.trim());
        break;
      case 'email':
        isValid = isEmailValid(value.trim());
        break;
      case 'phone':
        isValid = isPhoneValid(value);
        break;
      case 'numeric':
        isValid = isNumberValid(value);
        break;
      default:
        break;
    }

    const nextFields = { ...fields };

    if (innerField) {
      if (fields[field].values) {
        nextFields[field] = {
          ...fields[field],
          values: {
            ...fields[field].values,
            [innerField]: {
              ...fields[field].values[innerField],
              value,
              isValid,
            },
          },
        };

        this.setState({
          fields: nextFields,
        });
      }
    } else {
      nextFields[field] = {
        ...fields[field],
        value,
        isValid,
      };

      this.setState({
        fields: nextFields,
      });
    }
  }

  buttonIsDisabled() {
    const { fields } = this.state;
    let allValid = true;

    Object.keys(fields).forEach((key) => {
      if (fields[key].type !== 'tree') {
        if (!fields[key].isValid) {
          allValid = false;
        }
      } else if (fields[key].values) {
        Object.keys(fields[key].values).forEach((innerKey) => {
          if (!fields[key].values[innerKey].isValid) {
            allValid = false;
          }
        });
      }
    });

    return !allValid;
  }

  renderImageSection() {
    const { sweetItem } = this.props;

    return <HeaderComponent sweet={sweetItem} />;
  }

  renderInput(params) {
    const {
      style,
      field,
      placeholder,
      type,
      extraProps,
      innerField,
    } = params;
    const { fields } = this.state;

    return (
      <TextInput
        key={`text-input-${placeholder}-${type}`}
        style={style}
        onChange={value => this.handleSetField(field, value, innerField)}
        placeholder={placeholder}
        type={type}
        value={!innerField ? fields[field].value : fields[field].values[innerField].value}
        hasError={!!(!fields[field].isValid && fields[field].value)}
        maxLength={100}
        {...extraProps}
      />
    );
  }

  renderField(key) {
    const { fields } = this.state;

    switch (fields[key].type) {
      case 'string':
      case 'email':
        return (
          this.renderInput({
            field: key,
            placeholder: fields[key].label,
            type: key,
            rightIcon: true,
            extraProps: {
              autoCapitalize: 'none',
            },
          }));
      case 'numeric':
      case 'phone':
        return (
          this.renderInput({
            field: key,
            placeholder: fields[key].label,
            type: key,
            rightIcon: true,
            extraProps: {
              autoCapitalize: 'none',
              keyboardType: 'numeric',
            },
          }));
      case 'long_string':
        return (
          this.renderInput({
            field: key,
            placeholder: fields[key].label,
            type: key,
            rightIcon: true,
            extraProps: {
              autoCapitalize: 'none',
              numberOfLines: 6,
              maxLength: 2000,
              style: { height: 136 },
              rightIcon: assets.icons.asterisk,
              rightIconAlignmentTop: true,
            },
          }));
      default:
        return null;
    }
  }

  renderInputs() {
    const { fields } = this.state;

    return (
      <Section
        key="inputs-section"
        style={{ marginBottom: 0 }}
      >
        {Object.keys(fields).map(key => this.renderField(key))}
      </Section>
    );
  }

  render() {
    const { theme, placingOrder } = this.props;
    const disabled = this.buttonIsDisabled() || placingOrder;

    return (
      <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: deviceIsPhone ? theme.colors.white : theme.colors.lightGray }}
      >

        {this.renderImageSection()}

        <Content>
          {this.renderInputs()}

          <Section
            key="button-section"
          >
            <Button
              disabled={disabled}
              title={placingOrder ? "Placing Order" : "Order"}
              onPress={this.onSubmit}
            />
          </Section>

          <Section
            key="bottom-label-section"
            style={{ marginTop: 0, alignItems: 'center' }}
          >
            <SmoothText text="Thank you for your interest!" />
          </Section>
        </Content>

      </KeyboardAwareScrollView>
    );
  }
}

PlaceOrderView.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  sweetItem: PropTypes.shape({}),
};

PlaceOrderView.defaultProps = {
  sweetItem: {},
};

export default PlaceOrderView;
