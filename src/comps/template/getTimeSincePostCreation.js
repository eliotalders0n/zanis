let lastResult = null; // Variable to store the last result
let lastCreatedAt = null; // Variable to store the last createdAt timestamp

function getTimeSincePostCreation(createdAt) {
    // Check if the result is already memoized for the given createdAt
    if (lastCreatedAt === createdAt) {
        return lastResult; // Return the cached result
    }

    // Calculate the time difference
    const currentTime = new Date();
    const postTime = new Date(createdAt * 1000); // Convert seconds to milliseconds
    const timeDifference = Math.abs(currentTime - postTime) / 1000; // Difference in seconds

    // If the difference is less than a minute, return the cached result
    if (timeDifference < 60 && lastResult !== null && lastCreatedAt !== null) {
        return lastResult;
    }

    const seconds = timeDifference;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    // Determine the appropriate time format
    let result;
    if (seconds < 60) {
        result = seconds + " seconds ago";
    } else if (minutes < 60) {
        result = minutes + " minutes ago";
    } else if (hours < 24) {
        result = hours + " hours ago";
    } else if (days < 7) {
        result = days + " days ago";
    } else if (weeks < 4) {
        result = weeks + " weeks ago";
    } else if (months < 12) {
        result = months + " months ago";
    } else {
        result = years + " years ago";
    }

    // Cache the result and input timestamp for future use
    lastResult = result;
    lastCreatedAt = createdAt;

    return result;
}

export default getTimeSincePostCreation;
