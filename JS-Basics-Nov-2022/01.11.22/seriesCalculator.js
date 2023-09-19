function seriesCalculator(input) {
    let seriesName = input[0];
    let seasonsNumber = Number(input[1]);
    let episodesNumberPerSeason = Number(input[2]);
    let episodeDurationWithoutAdv = Number(input[3]);

    let totalEpisodesNumber = seasonsNumber * episodesNumberPerSeason;
    let advDurationPerEpisode = episodeDurationWithoutAdv * Number(0.2);
    let totalAdvDuration = advDurationPerEpisode * totalEpisodesNumber;
    let addTimeForEveryLastEpisode = Number(10);
    let totalAddTimeForTheLastEpisodes = seasonsNumber * addTimeForEveryLastEpisode;

    let totalDurationWithAdv = Math.floor(totalEpisodesNumber * episodeDurationWithoutAdv + totalAdvDuration + totalAddTimeForTheLastEpisodes);
    console.log(`Total time needed to watch the ${seriesName} series is ${totalDurationWithAdv} minutes.`);
}

seriesCalculator(["Lucifer", "3", "18", "55"]);