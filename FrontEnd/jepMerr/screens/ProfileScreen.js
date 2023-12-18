import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  // Sample user data, replace this with your actual user data
  const [userData, setUserData] = useState({
    username: 'John Doe',
    profileImageUri: 'https://i.pinimg.com/236x/83/38/1b/83381b20d67747ed8c8d0d4afac89f37.jpg',
    // Add more user data as needed
  });

  const currentPaymentType = 'Credit Card'; // Replace with actual payment type

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Profile Title */}
        <Text style={styles.profileTitle}>Profile</Text>

        {/* Profile Image and User Name */}
        <View style={styles.profileInfo}>
          <Image
            source={{ uri: userData.profileImageUri }}
            style={styles.profileImage}
          />
          <Text style={styles.username}>{userData.username}</Text>
        </View>

        {/* Other Profile Information */}
        {/* Add more components for additional profile information */}
        <View style={styles.additionalInfoContainer}>
          {/* Purchase History */}
          <TouchableOpacity style={styles.additionalInfoItem}>
            <Text style={styles.additionalInfoText}>Purchase History</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} color="#33356d" style={styles.icon} />
          </TouchableOpacity>

          {/* Wishlist */}
          <TouchableOpacity style={styles.additionalInfoItem}>
            <Text style={styles.additionalInfoText}>Wishlist</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} color="#33356d" style={styles.icon} />
          </TouchableOpacity>

          {/* Account Details */}
          <TouchableOpacity style={styles.additionalInfoItem}>
            <Text style={styles.additionalInfoText}>Account Details</Text>
            <MaterialCommunityIcons name="arrow-right" size={20} color="#33356d" style={styles.icon} />
          </TouchableOpacity>

          {/* Sign Out */}
          <TouchableOpacity style={styles.additionalInfoItem}>
            <Text style={styles.signout}>Sign Out</Text>
            <MaterialCommunityIcons name="exit-to-app" size={20} color="#33356d" style={styles.icon} />
          </TouchableOpacity>

          {/* Current Payment Type */}
          <View style={styles.paymentTypeContainer}>
            <Text style={styles.paymentTypeTitle}>Your Current Paying Type</Text>
            <View style={styles.bankCardContainer}>
              <Image source={{ uri: 'https://www.mastercard.co.th/content/dam/public/mastercardcom/th/en/business/cards/world-business_1280x720.png' }} style={styles.bankCardImage} />
            </View>
            <Text style={styles.currentPaymentType}>{currentPaymentType}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    height: 1400,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
    marginTop: 40,
    backgroundColor: '#33356d',
  },
  profileTitle: {
    marginLeft: 10,
    marginTop: 20,
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingBottom: 36,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 8,
  },
  username: {
    marginLeft: 10,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  additionalInfoContainer: {
    marginTop: 74,
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  additionalInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#33356d',
  },
  icon: {
    marginLeft: 10,
  },
  additionalInfoText: {
    fontSize: 18,
    color: '#33356d',
    paddingBottom: 20,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  signout: {
    color: 'red',
    fontSize: 18,
    paddingBottom: 20,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  paymentTypeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  paymentTypeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#33356d',
    marginBottom: 6,
  },

  bankCardImage: {
    width: 400,
    height: 300,
    borderRadius: 8,
  },
  currentPaymentType: {
    fontSize: 18,
    color: '#33356d',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
