import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {accordionStyle} from './Accordion.styles';
import Gradient from '../gradient/Gradient';
import Colors from '../../utils/Colors';
import {GenUtils} from '../../utils/GenUtils';
import {GenericStyles} from '../../utils/GenericStyles';
import {navigateScreen} from '../../utils/NavigationService';
import RoutesEnum from '../../utils/RoutesEnum';

const Accordion = ({title, data}) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      }).start();
    }
    setOpen(!open);
  };

  const onItemPress = () => {
    navigateScreen(RoutesEnum.ItemList);
  };

  const renderBody = (item, index) => {
    return (
      <TouchableOpacity onPress={onItemPress} style={accordionStyle.bodyCard}>
        <Text style={accordionStyle.bodyCardTitle}>{item.title}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          style={accordionStyle.forwardIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity activeOpacity={1} onPress={() => toggleListItem()}>
        <Gradient
          colors={[...GenUtils.getGradientColors(Colors.greenGradient)]}
          style={[
            accordionStyle.accordion,
            open && accordionStyle.openAccordion,
          ]}>
          <View style={accordionStyle.imageContainer}>
            <Image
              source={{
                uri:
                  'https://www.jiomart.com/images/category/35/thumb/0-35.png',
              }}
              style={accordionStyle.image}
              resizeMode="contain"
            />
          </View>
          <View style={accordionStyle.titleContainer}>
            <Text style={accordionStyle.title}>{title}</Text>
            <Animated.View style={{transform: [{rotateZ: arrowAngle}]}}>
              <MaterialIcons
                name="keyboard-arrow-down"
                style={accordionStyle.icon}
              />
            </Animated.View>
          </View>
        </Gradient>
      </TouchableOpacity>
      <Animated.View
        style={[accordionStyle.bodyBackground, {height: bodyHeight}]}>
        <View
          style={accordionStyle.bodyContainer}
          onLayout={event => {
            setBodySectionHeight(event.nativeEvent.layout.height);
          }}>
          {data.map(renderBody)}
        </View>
      </Animated.View>
    </>
  );
};
export default Accordion;
