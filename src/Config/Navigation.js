import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../Screens/Profile/Profile'
import Booking from '../Screens/Home/Booking/Booking'
import Inbox from '../Screens/Home/Inbox/Inbox'
import Login from '../Screens/AUth/Login/Login'
import SignUp from '../Screens/AUth/SignUp/SignUp'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { Icon } from 'react-native-elements'
import Onboardingui from '../Screens/Home/onboardingui/Onboardingui'
import InboxProfile from '../Screens/Home/Inbox/InboxProfile'
import SecondHome from '../Screens/SecondHome/SecondHome'
import SubCategory from '../Screens/SecondHome/Service/SubCategory'
import SubmitCategories from '../Screens/SecondHome/Service/SubmitCategories/SubmitCategories'
import { priamry } from '../Colors/PrimaryColor'
import Order from '../Screens/Home/Booking/Order/Order'
import Submit from '../Components/SubmitScreen/Submit'
import CardSubmit from '../Screens/Submit/CardSubmit'
import Forgot from '../Screens/AUth/ForgotPassword/Forgot'
import Reset from '../Screens/AUth/ResetPassword/Reset'
import Splash from '../Screens/SplashScreen/SpalshScreen'
import OrderDetail from '../Screens/Home/Booking/Order/OrderDetail/OrderDetail'
import Verification from '../Screens/AUth/SignUp/Verification/Verification'
import ChangePassword from '../Screens/AUth/ForgotPassword/ChangePassword/ChangePassword'
import Setting from '../Screens/Setting/Setting'
import CustomerSupport from '../Screens/Profile/CustomerSupport/CustomerSupport'
import FeedBack from '../Screens/Profile/FeedBack/FeedBack'
import EditProfile from '../Screens/Setting/EditProfile/EditProfile';
import BudgetFile from '../Screens/Home/Booking/Order/BudgetFile';
import Address from '../Screens/Address'
const navigationhandel = () => ({

  headerShown: false
}
)
const BookingStack = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Order">
        <Stack.Screen options={navigationhandel} name="Order" component={Order} />
      </Stack.Navigator>
    </>
  )
}

const Homeservices = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={navigationhandel} name="SecondHome" component={SecondHome} />
    </Stack.Navigator>
  )
}
const HomeTab = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Homeservices') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'BookingStack') {
              iconName = focused ? 'box' : 'box';
            }
            else if (route.name === 'Inbox') {
              iconName = focused ? 'comment' : 'comment';
            }

            else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }
            return <Icon type="font-awesome-5" name={iconName} size={size} color={color} />;
          },
        })}
        options={{
          activeTintColor: priamry,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen options={navigationhandel} options={{ tabBarLabel: 'Home', headerShown: false }} name="Homeservices" component={Homeservices} />
        <Tab.Screen options={navigationhandel} options={{ tabBarLabel: 'Services', headerShown: false }} name="BookingStack" component={BookingStack} />
        <Tab.Screen name="Inbox" component={Inbox} options={{ tabBarLabel: 'Inbox', headerShown: false }} />
        <Tab.Screen options={navigationhandel} name="Profile" component={Profile} />
      </Tab.Navigator>
    </>
  )
}
const HomeStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Onboardingui" >
      <Stack.Screen options={navigationhandel} name='HomeTab' component={HomeTab} />
      <Stack.Screen options={navigationhandel} name="InboxProfile" component={InboxProfile} />
      <Stack.Screen options={navigationhandel} name="Submit" component={Submit} />
      <Stack.Screen options={navigationhandel} name="SubCategory" component={SubCategory} />
      <Stack.Screen options={navigationhandel} name="SubmitCategories" component={SubmitCategories} />
      <Stack.Screen options={navigationhandel} name="CardSubmit" component={CardSubmit} />
      <Stack.Screen options={navigationhandel} name="Forgot" component={Forgot} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen options={navigationhandel} name="Splash" component={Splash} />
      <Stack.Screen options={navigationhandel} name='Login' component={Login} />
      <Stack.Screen options={navigationhandel} name='SignUp' component={SignUp} />
      <Stack.Screen options={navigationhandel} name='Onboardingui' component={Onboardingui} />
      <Stack.Screen options={navigationhandel} name='OrderDetail' component={OrderDetail} />
      <Stack.Screen options={navigationhandel} name='budgetFile' component={BudgetFile} />
      <Stack.Screen options={navigationhandel} name='Verification' component={Verification} />
      <Stack.Screen options={navigationhandel} name='ChangePassword' component={ChangePassword} />
      <Stack.Screen options={navigationhandel} name='Setting' component={Setting} />
      <Stack.Screen options={navigationhandel} name='CustomerSupport' component={CustomerSupport} />
      <Stack.Screen options={navigationhandel} name='FeedBack' component={FeedBack} />
      <Stack.Screen options={navigationhandel} name='EditProfile' component={EditProfile} />
      <Stack.Screen options={navigationhandel} name='Addresses' component={Address} />







    </Stack.Navigator>
  )
}
const Navigation = (props) => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  )
}
export default Navigation