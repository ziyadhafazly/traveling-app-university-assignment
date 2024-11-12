import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Switch, Alert, ActivityIndicator } from 'react-native';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { LineChart } from 'react-native-chart-kit';

const TourismApp = () => {
  const [userName, setUserName] = useState('Traveler');
  const [location, setLocation] = useState('San Francisco');
  const [searchText, setSearchText] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [upcomingTrips, setUpcomingTrips] = useState([
    {
      destination: 'Paris',
      startDate: '2023-06-15',
      endDate: '2023-06-22',
      bookingRef: 'ABC123'
    },
    {
      destination: 'Tokyo',
      startDate: '2023-08-01',
      endDate: '2023-08-10',
      bookingRef: 'XYZ456'
    }
  ]);
  const [deals, setDeals] = useState([
    {
      title: '20% Off Hotel Bookings',
      description: 'Use promo code SUMMER23 for 20% off hotel stays.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooVWPU_tPab_L62zexyRs4dInJePJR6OpMw&s'
    },
    {
      title: 'Weekend Getaway to Napa',
      description: 'Exclusive package with winery tours and luxury accommodations.',
      image: 'https://www.fueledbywanderlust.com/wp-content/uploads/2023/10/Napa-Valley-Itinerary-Pinterest-3.png'
    }
  ]);
  const [trendingDestinations, setTrendingDestinations] = useState([
    {
      name: 'Maui',
      image: 'https://m.media-amazon.com/images/I/91pz476-lXL._AC_UF1000,1000_QL80_.jpg',
      description: 'Discover the beauty of Maui with our top recommendations.'
    },
    {
      name: 'Rome',
      image: 'https://www.far-out.travel/wp-content/uploads/2022/05/Rome-2.jpg',
      description: 'Explore the historic streets and iconic landmarks of Rome.'
    },
    {
      name: 'Bali',
      image: 'https://ourtravelpassport.com/wp-content/uploads/2019/01/whattodoinbalinusapenidakelingklingbeach.jpg',
      description: 'Relax and rejuvenate in the tropical paradise of Bali.'
    }
  ]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate search functionality
    setTimeout(() => {
      setIsSearching(false);
      console.log(`Searching for "${searchText}"`);
    }, 2000);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.greeting}>Welcome back, {userName}!</Text>
        <Text style={styles.location}>Exploring {location}? Here are some recommendations:</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.container}>
      <View style={styles.searchBar}>
        <Feather name="search" color="#999" size={24} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search destinations, activities, hotels..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          {isSearching ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.searchButtonText}>Go</Text>
          )}
        </TouchableOpacity>
      </View>
      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.searchFilters}>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialIcons name="hotel" color="#999" size={20} />
          <Text style={styles.filterText}>Hotels</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
         <FontAwesome name="plane" size={20} color="#999" />
            <Text style={styles.filterText}>Flights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
          <FontAwesome6 name="map-location-dot" size={20} color="#999" />
            <Text style={styles.filterText}>Attractions</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

      {/* Top Destinations */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Trending Destinations</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {trendingDestinations.map((destination, index) => (
            <View key={index} style={styles.destinationCard}>
              <Image source={{ uri: destination.image }} style={styles.destinationImage} />
              <Text style={styles.destinationName}>{destination.name}</Text>
              <Text style={styles.destinationDescription}>{destination.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Quick Access Buttons */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.quickAccessButtons}>
          <TouchableOpacity style={styles.quickAccessButton}>
            <FontAwesome5 name="calendar-alt" color="#999" size={24} />
            <Text style={styles.quickAccessText}>Itinerary</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
          <FontAwesome name="hotel" size={24} color="#999" />
            <Text style={styles.quickAccessText}>Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#999" />
            <Text style={styles.quickAccessText}>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessButton}>
          <MaterialCommunityIcons name="chat-question" size={24} color="#999" />
            <Text style={styles.quickAccessText}>Experiences</Text>
          </TouchableOpacity>
        </View>
        </ScrollView> 
      </View>

      {/* Upcoming Trips */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Upcoming Trips</Text>
        {upcomingTrips.length > 0 ? (
          upcomingTrips.map((trip, index) => (
            <View key={index} style={styles.tripCard}>
              <Text style={styles.tripDestination}>{trip.destination}</Text>
              <Text style={styles.tripDates}>
                {trip.startDate} - {trip.endDate}
              </Text>
              <Text style={styles.tripBookingRef}>Booking Ref: {trip.bookingRef}</Text>
            </View>
          ))
        ) : (
          <View style={styles.noTripsContainer}>
            <ActivityIndicator size="large" color="#999" />
            <Text style={styles.noTripsText}>Loading upcoming trips...</Text>
          </View>
        )}
      </View>

      {/* Deals and Offers */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Featured Deals</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {deals.map((deal, index) => (
            <View key={index} style={styles.dealCard}>
              <Image source={{ uri: deal.image }} style={styles.dealImage} />
              <Text style={styles.dealTitle}>{deal.title}</Text>
              <Text style={styles.dealDescription}>{deal.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Travel Tools */}
      <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Travel Tools</Text>
      <View style={styles.travelTools}>
        <TouchableOpacity style={styles.travelToolButton}>
          <Feather name="map-pin" color="#999" size={24} />
          <Text style={styles.travelToolText}>Currency</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.travelToolButton}>
          <MaterialIcons name="translate" size={24} color="#999" />
          <Text style={styles.travelToolText}>Translator</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.travelToolButton}>
          <MaterialIcons name="tour" size={24} color="#999" />
          <Text style={styles.travelToolText}>AR Tour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.travelToolButton}>
          <MaterialIcons name="emergency-share" size={24} color="#999" />
          <Text style={styles.travelToolText}>Emergency</Text>
        </TouchableOpacity>
      </View>
    </View>

      {/* Suggested Itineraries */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Suggested Itineraries</Text>
        <LineChart
          data={{
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
            datasets: [
              {
                data: [50, 60, 70, 80, 90]
              }
            ]
          }}
          width={375}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726'
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>

      {/* Notifications Settings */}
      <View style={styles.sectionContainer}>
        <View style={styles.notificationsContainer}>
          <Text style={styles.notificationsTitle}>Notifications</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{ false: '#ccc', true: '#4CAF50' }}
            thumbColor={notificationsEnabled ? '#fff' : '#f4f3f4'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  welcomeSection: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 8,
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchFilters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:8,
  },
  
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  filterText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#666',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  destinationCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    overflow: 'hidden',
  },
  destinationImage: {
    height: 120,
    resizeMode: 'cover',
  },
  destinationName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  destinationDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  quickAccessButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  quickAccessButton: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '28%',
  },
  quickAccessText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  tripCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  tripDestination: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tripDates: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  tripBookingRef: {
    fontSize: 14,
    color: '#999',
  },
  noTripsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  noTripsText: {
    fontSize: 16,
    color: '#999',
    marginTop: 8,
  },
  dealCard: {
    width: 200,
    marginRight: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    overflow: 'hidden',
  },
  dealImage: {
    height: 120,
    resizeMode: 'cover',
  },
  dealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  dealDescription: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  
  travelTools: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  travelToolButton: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  travelToolText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
  },
  notificationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  notificationsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TourismApp;