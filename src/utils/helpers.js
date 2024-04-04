const images = [
    "https://rukminim2.flixcart.com/image/200/200/k4k7f680/electrical-socket/j/p/z/5208-anchor-original-imafnfxycmxepg3v.jpeg?q=90",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/v/h/-original-imagxaqtzmqgtfen.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/remote-control-toy/j/3/q/premium-foldable-spy-drone-with-hq-wifi-camera-remote-control-original-imagw4hjbm4gagqq.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/kvvad8w0/sports-action-camera/k/x/f/spy-magnet-camera-wifi-hidden-camera-wireless-hd-1080p-indoor-original-imafxeen9r3zepwy.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/camera-housing/a/k/c/6-4k-action-camera-with-170-wide-angle-support-wifi-sports-cam-original-imag8jwu6qbydcnt.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/ktaeqvk0/gaming-accessory-kit/gaming-console/f/y/o/400-in-1-sup-game-box-rechargable-console-led-screen-retro-original-imag6nxaeyacem3u.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/kly2aa80/game-control-mount/p/e/4/video-game-for-kids-handing-game-aadarsh-original-imagyyhzeqgaw8zt.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/612/612/xif0q/laser-pointer/f/y/b/10-standard-laser-light-pointer-with-different-modes-original-imaghfsvvy4vwghf.jpeg?q=70",
];
export const getRandomItemFromArray = (array = images) => {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * array.length);
    // Return the item at the random index
    return array[randomIndex];
};

export const formatDate = (dateString) => {
    // Create a new Date object from the input date string
    const date = new Date(dateString);
    
    // Define arrays for month names and day names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Extract day, month, and year from the Date object
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    
    // Get the month name and day name using the arrays defined above
    const month = months[monthIndex];
    const dayIndex = date.getDay();
    const dayName = days[dayIndex];
    
    // Return the formatted date string
    return `${dayName}, ${month} ${day}, ${year}`;
};
