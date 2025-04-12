import type { PokerStore } from "@/types/store";

/**
 * Mock data for poker stores
 */
export const mockStores: PokerStore[] = [
	{
		id: "1",
		name: "Poker Room Tokyo",
		address: "〒160-0021 東京都新宿区歌舞伎町1-1-1",
		location: { lat: 35.69433, lng: 139.70345 },
		openingHours: [
			{ day: "月曜日", hours: "14:00-23:00" },
			{ day: "火曜日", hours: "14:00-23:00" },
			{ day: "水曜日", hours: "14:00-23:00" },
			{ day: "木曜日", hours: "14:00-23:00" },
			{ day: "金曜日", hours: "14:00-翌3:00" },
			{ day: "土曜日", hours: "12:00-翌3:00" },
			{ day: "日曜日", hours: "12:00-23:00" },
		],
		pricing: {
			entryFee: 1000,
			chipPrice: 500,
			withdrawalFee: 500,
		},
		rules: {
			hasAnte: true,
			rake: "5% (上限¥500)",
		},
		events: {
			hasTournaments: true,
			tournamentDetails: "毎週土曜 20:00開始 参加費¥5,000",
		},
		googleMapsPlaceId: "ChIJxeQwn9GMGGARSy5vKHBVZuE",
		rating: 4.3,
		photoUrl: "https://images.unsplash.com/photo-1606167668584-78701c57f13d",
	},
	{
		id: "2",
		name: "エース・ポーカー渋谷",
		address: "〒150-0042 東京都渋谷区宇田川町20-1",
		location: { lat: 35.66022, lng: 139.69748 },
		openingHours: [
			{ day: "月曜日", hours: "休業" },
			{ day: "火曜日", hours: "18:00-翌1:00" },
			{ day: "水曜日", hours: "18:00-翌1:00" },
			{ day: "木曜日", hours: "18:00-翌1:00" },
			{ day: "金曜日", hours: "18:00-翌3:00" },
			{ day: "土曜日", hours: "13:00-翌3:00" },
			{ day: "日曜日", hours: "13:00-23:00" },
		],
		pricing: {
			entryFee: 0,
			chipPrice: 300,
			withdrawalFee: 300,
		},
		rules: {
			hasAnte: false,
			rake: "3% (上限¥300)",
		},
		events: {
			hasTournaments: true,
			tournamentDetails: "月2回日曜 15:00開始 参加費¥3,000",
		},
		googleMapsPlaceId: "ChIJi9bKlquMGGARLVHs3YYQpEA",
		rating: 4.0,
		photoUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
	},
	{
		id: "3",
		name: "Royal Flush Casino",
		address: "〒530-0001 大阪府大阪市北区梅田2-2-2",
		location: { lat: 34.70295, lng: 135.49816 },
		openingHours: [
			{ day: "月曜日", hours: "15:00-翌0:00" },
			{ day: "火曜日", hours: "15:00-翌0:00" },
			{ day: "水曜日", hours: "15:00-翌0:00" },
			{ day: "木曜日", hours: "15:00-翌0:00" },
			{ day: "金曜日", hours: "15:00-翌3:00" },
			{ day: "土曜日", hours: "12:00-翌3:00" },
			{ day: "日曜日", hours: "12:00-翌0:00" },
		],
		pricing: {
			entryFee: 2000,
			chipPrice: 1000,
			withdrawalFee: 0,
		},
		rules: {
			hasAnte: true,
			rake: "10% (上限¥1,000)",
		},
		events: {
			hasTournaments: true,
			tournamentDetails: "毎日19:00開始 参加費¥10,000 (金・土は20:00開始)",
		},
		googleMapsPlaceId: "ChIJHbC4OXHnAGARgQx4kUVdQSk",
		rating: 4.7,
		photoUrl: "https://images.unsplash.com/photo-1596451190630-186aff535bf2",
	},
	{
		id: "4",
		name: "Poker Stars Nagoya",
		address: "〒460-0008 愛知県名古屋市中区栄3-3-3",
		location: { lat: 35.16771, lng: 136.90801 },
		openingHours: [
			{ day: "月曜日", hours: "休業" },
			{ day: "火曜日", hours: "17:00-23:00" },
			{ day: "水曜日", hours: "17:00-23:00" },
			{ day: "木曜日", hours: "17:00-23:00" },
			{ day: "金曜日", hours: "17:00-翌1:00" },
			{ day: "土曜日", hours: "14:00-翌1:00" },
			{ day: "日曜日", hours: "14:00-22:00" },
		],
		pricing: {
			entryFee: 500,
			chipPrice: 200,
			withdrawalFee: 200,
		},
		rules: {
			hasAnte: false,
			rake: "5% (上限¥500)",
		},
		events: {
			hasTournaments: false,
		},
		googleMapsPlaceId: "ChIJTf_mQUxwA2ARk-48Pj5zbRQ",
		rating: 3.9,
		photoUrl: "https://images.unsplash.com/photo-1629253295404-a01bef01f05b",
	},
	{
		id: "5",
		name: "Poker House Fukuoka",
		address: "〒810-0001 福岡県福岡市中央区天神1-1-1",
		location: { lat: 33.59067, lng: 130.40141 },
		openingHours: [
			{ day: "月曜日", hours: "休業" },
			{ day: "火曜日", hours: "18:00-翌0:00" },
			{ day: "水曜日", hours: "18:00-翌0:00" },
			{ day: "木曜日", hours: "18:00-翌0:00" },
			{ day: "金曜日", hours: "18:00-翌2:00" },
			{ day: "土曜日", hours: "15:00-翌2:00" },
			{ day: "日曜日", hours: "15:00-23:00" },
		],
		pricing: {
			entryFee: 1000,
			chipPrice: 500,
			withdrawalFee: 0,
		},
		rules: {
			hasAnte: true,
			rake: "5% (上限¥500)",
		},
		events: {
			hasTournaments: true,
			tournamentDetails: "毎週金曜 20:00開始 参加費¥5,000",
		},
		googleMapsPlaceId: "ChIJk3FpYmWRQTURPwDCJ-mKTAE",
		rating: 4.2,
		photoUrl: "https://images.unsplash.com/photo-1634979149798-e7616260959c",
	},
];
