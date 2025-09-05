const getCoordinates = async (address) => {
  const apiKey = '1800779777654fe28628fb22b7809016';
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`
  );
  const data = await response.json();
  if (data.features.length > 0) {
    return data.features[0].geometry.coordinates; // [lon, lat]
  }
};
