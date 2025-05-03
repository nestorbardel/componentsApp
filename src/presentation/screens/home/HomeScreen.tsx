import {ScrollView, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme.tsx';
import {Title} from '../../components/ui/Title.tsx';
import {MenuItem} from '../../components/ui/MenuItem.tsx';

export const animationMenuItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
] ;

export const uiMenuItems = [
  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
]


export const menuItems = [
  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },


];

export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="Opciones de menu" safe={true} />
          {
            animationMenuItems.map((item, index) => (
                <MenuItem
                    {...item}
                    key={item.component}
                    isFirst={index === 0}
                    isLast={index === animationMenuItems.length - 1}
                />
            ))
          }
          <View style={{marginTop: 20}} />

          {
            menuItems.map((item, index) => (
                <MenuItem
                    {...item}
                    key={item.component}
                    isFirst={index === 0}
                    isLast={index === menuItems.length - 1}
                />
            ))
          }
          <View style={{marginTop: 20}} />
          {
            uiMenuItems.map((item, index) => (
              <MenuItem
                {...item}
                key={item.component}
                isFirst={index === 0}
                isLast={index === uiMenuItems.length - 1}
              />
            ))
          }
          <View style={{marginTop: 20}} />

        </ScrollView>
      </View>
    </View>
  );
};
