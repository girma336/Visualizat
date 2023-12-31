export const getTopic = (topics) => {
    if (topics) {
        const groupedData = topics.reduce((result, entry) => {
            const { topic } = entry;
            if (!result[topic]) {
                result[topic] = 0;
            }
            result[topic] += 1;
            return result;
        }, {});
        const groupedArray = Object.entries(groupedData).map(([topic, count]) => ({ topic, count }));
        return groupedArray;
    } else {
        console.log("Topic data is undefined or null");
    }
}

export const getRelevance = (relevance) => {
    if (relevance) {
        const groupedData = relevance.reduce((result, entry) => {
            const { country, relevance } = entry;
            if (!result[country]) {
                result[country] = 0;
            }
            result[country] += relevance;
            return result;
        }, {});
        const groupedArray = Object.entries(groupedData).map(([country, relevance]) => ({ country, relevance }));
        return groupedArray;
    } else {
        console.log("relevance data is undefined or null");
    }
}

export const getIntensity = (intensitys) => {
    if (intensitys) {
        const groupedData = intensitys.reduce((result, entry) => {
            const { country, intensity } = entry;
            if (!result[country]) {
                result[country] = 0;
            }
            result[country] += intensity;
            return result;
        }, {});
        const groupedArray = Object.entries(groupedData).map(([country, intensity]) => ({ country, intensity }));
        return groupedArray;
    } else {
        console.log("intensity data is undefined or null");
    }
}

export const getRegion = (regions) => {
    if (regions) {
        const groupedData = regions.reduce((result, entry) => {
            const { region } = entry;
            if (!result[region]) {
                result[region] = 0;
            }
            result[region] += 1;
            return result;
        }, {});
        const groupedArray = Object.entries(groupedData).map(([region, count]) => ({ region, count }));
        return groupedArray;
    } else {
        console.log("Region data is undefined or null");
    }
}

export const getCountry = (countrys) => {
    if (countrys) {
        const groupedData = countrys.reduce((result, entry) => {
            const { country} = entry;
            if (!result[country]) {
                result[country] = 0;
            }
            result[country] += 1;
            return result;
        }, {});
        const groupedArray = Object.entries(groupedData).map(([country, count]) => ({ country, count }));
        return groupedArray;
    } else {
        console.log("Country data is undefined or null");
    }
}