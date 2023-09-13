var API_KEY = 'YOUR_API_KEY';

// Find the postcode and address fields in the Shopify checkout form
var postcodeField = document.getElementById('checkout_shipping_address_zip');
var addressFields = {
  address1: document.getElementById('checkout_shipping_address_address1'),
  address2: document.getElementById('checkout_shipping_address_address2'),
  city: document.getElementById('checkout_shipping_address_city'),
  province: document.getElementById('checkout_shipping_address_province'),
  country: document.getElementById('checkout_shipping_address_country')
};

// Create a new Google Places Autocomplete object
var autocomplete = new google.maps.places.Autocomplete(postcodeField, {
  types: ['address'],
  componentRestrictions: {country: 'in'}
});

// Add a listener to the Autocomplete object for when an address is selected
autocomplete.addListener('place_changed', fillInAddress);

function fillInAddress() {
  // Get the details for the selected address
  var place = autocomplete.getPlace();
  
  // Fill in the address fields in the Shopify checkout form
  addressFields.address1.value = place.name + ' ' + place.street_number;
  addressFields.address2.value = '';
  addressFields.city.value = place.locality;
  addressFields.province.value = place.administrative_area_level_1;
  addressFields.country.value = 'India';
}