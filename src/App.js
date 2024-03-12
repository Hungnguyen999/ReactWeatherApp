import logo from './logo.svg';
import { useState } from 'react';
import Select from 'react-select';

import "primereact/resources/themes/lara-light-cyan/theme.css";


import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

import './App.css';

function App() {
  // Way 1: Sử dụng fetch, async, await lấy trực tiếp data từ API
  const countries = [
    {
      "name": "Bangladesh",
      "iso2": "BD",
      "iso3": "BGD",
      "unicodeFlag": "🇧🇩"
    },
    {
      "name": "Belgium",
      "iso2": "BE",
      "iso3": "BEL",
      "unicodeFlag": "🇧🇪"
    },
    {
      "name": "Burkina Faso",
      "iso2": "BF",
      "iso3": "BFA",
      "unicodeFlag": "🇧🇫"
    },
    {
      "name": "Bulgaria",
      "iso2": "BG",
      "iso3": "BGR",
      "unicodeFlag": "🇧🇬"
    },
    {
      "name": "Bosnia and Herzegovina",
      "iso2": "BA",
      "iso3": "BIH",
      "unicodeFlag": "🇧🇦"
    },
    {
      "name": "Barbados",
      "iso2": "BB",
      "iso3": "BRB",
      "unicodeFlag": "🇧🇧"
    },
    {
      "name": "Wallis and Futuna",
      "iso2": "WF",
      "iso3": "WLF",
      "unicodeFlag": "🇼🇫"
    },
    {
      "name": "Saint Barthelemy",
      "iso2": "BL",
      "iso3": "BLM",
      "unicodeFlag": "🇧🇱"
    },
    {
      "name": "Bermuda",
      "iso2": "BM",
      "iso3": "BMU",
      "unicodeFlag": "🇧🇲"
    },
    {
      "name": "Brunei",
      "iso2": "BN",
      "iso3": "BRN",
      "unicodeFlag": "🇧🇳"
    },
    {
      "name": "Bolivia",
      "iso2": "BO",
      "iso3": "BOL",
      "unicodeFlag": "🇧🇴"
    },
    {
      "name": "Bahrain",
      "iso2": "BH",
      "iso3": "BHR",
      "unicodeFlag": "🇧🇭"
    },
    {
      "name": "Burundi",
      "iso2": "BI",
      "iso3": "BDI",
      "unicodeFlag": "🇧🇮"
    },
    {
      "name": "Benin",
      "iso2": "BJ",
      "iso3": "BEN",
      "unicodeFlag": "🇧🇯"
    },
    {
      "name": "Bhutan",
      "iso2": "BT",
      "iso3": "BTN",
      "unicodeFlag": "🇧🇹"
    },
    {
      "name": "Jamaica",
      "iso2": "JM",
      "iso3": "JAM",
      "unicodeFlag": "🇯🇲"
    },
    {
      "name": "Bouvet Island",
      "iso2": "BV",
      "iso3": "BVT",
      "unicodeFlag": "🇧🇻"
    },
    {
      "name": "Botswana",
      "iso2": "BW",
      "iso3": "BWA",
      "unicodeFlag": "🇧🇼"
    },
    {
      "name": "Samoa",
      "iso2": "WS",
      "iso3": "WSM",
      "unicodeFlag": "🇼🇸"
    },
    {
      "name": "Bonaire, Saint Eustatius and Saba ",
      "iso2": "BQ",
      "iso3": "BES",
      "unicodeFlag": "🇧🇶"
    },
    {
      "name": "Brazil",
      "iso2": "BR",
      "iso3": "BRA",
      "unicodeFlag": "🇧🇷"
    },
    {
      "name": "Bahamas",
      "iso2": "BS",
      "iso3": "BHS",
      "unicodeFlag": "🇧🇸"
    },
    {
      "name": "Jersey",
      "iso2": "JE",
      "iso3": "JEY",
      "unicodeFlag": "🇯🇪"
    },
    {
      "name": "Belarus",
      "iso2": "BY",
      "iso3": "BLR",
      "unicodeFlag": "🇧🇾"
    },
    {
      "name": "Belize",
      "iso2": "BZ",
      "iso3": "BLZ",
      "unicodeFlag": "🇧🇿"
    },
    {
      "name": "Russia",
      "iso2": "RU",
      "iso3": "RUS",
      "unicodeFlag": "🇷🇺"
    },
    {
      "name": "Rwanda",
      "iso2": "RW",
      "iso3": "RWA",
      "unicodeFlag": "🇷🇼"
    },
    {
      "name": "Serbia",
      "iso2": "RS",
      "iso3": "SRB",
      "unicodeFlag": "🇷🇸"
    },
    {
      "name": "Timor-Leste",
      "iso2": "TL",
      "iso3": "TLS",
      "unicodeFlag": "🇹🇱"
    },
    {
      "name": "Réunion",
      "iso2": "RE",
      "iso3": "REU",
      "unicodeFlag": "🇷🇪"
    },
    {
      "name": "Turkmenistan",
      "iso2": "TM",
      "iso3": "TKM",
      "unicodeFlag": "🇹🇲"
    },
    {
      "name": "Tajikistan",
      "iso2": "TJ",
      "iso3": "TJK",
      "unicodeFlag": "🇹🇯"
    },
    {
      "name": "Romania",
      "iso2": "RO",
      "iso3": "ROU",
      "unicodeFlag": "🇷🇴"
    },
    {
      "name": "Tokelau",
      "iso2": "TK",
      "iso3": "TKL",
      "unicodeFlag": "🇹🇰"
    },
    {
      "name": "Guinea-Bissau",
      "iso2": "GW",
      "iso3": "GNB",
      "unicodeFlag": "🇬🇼"
    },
    {
      "name": "Guam",
      "iso2": "GU",
      "iso3": "GUM",
      "unicodeFlag": "🇬🇺"
    },
    {
      "name": "Guatemala",
      "iso2": "GT",
      "iso3": "GTM",
      "unicodeFlag": "🇬🇹"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "iso2": "GS",
      "iso3": "SGS",
      "unicodeFlag": "🇬🇸"
    },
    {
      "name": "Greece",
      "iso2": "GR",
      "iso3": "GRC",
      "unicodeFlag": "🇬🇷"
    },
    {
      "name": "Equatorial Guinea",
      "iso2": "GQ",
      "iso3": "GNQ",
      "unicodeFlag": "🇬🇶"
    },
    {
      "name": "Guadeloupe",
      "iso2": "GP",
      "iso3": "GLP",
      "unicodeFlag": "🇬🇵"
    },
    {
      "name": "Japan",
      "iso2": "JP",
      "iso3": "JPN",
      "unicodeFlag": "🇯🇵"
    },
    {
      "name": "Guyana",
      "iso2": "GY",
      "iso3": "GUY",
      "unicodeFlag": "🇬🇾"
    },
    {
      "name": "Guernsey",
      "iso2": "GG",
      "iso3": "GGY",
      "unicodeFlag": "🇬🇬"
    },
    {
      "name": "Georgia",
      "iso2": "GE",
      "iso3": "GEO",
      "unicodeFlag": "🇬🇪"
    },
    {
      "name": "Grenada",
      "iso2": "GD",
      "iso3": "GRD",
      "unicodeFlag": "🇬🇩"
    },
    {
      "name": "United Kingdom",
      "iso2": "GB",
      "iso3": "GBR",
      "unicodeFlag": "🇬🇧"
    },
    {
      "name": "Gabon",
      "iso2": "GA",
      "iso3": "GAB",
      "unicodeFlag": "🇬🇦"
    },
    {
      "name": "El Salvador",
      "iso2": "SV",
      "iso3": "SLV",
      "unicodeFlag": "🇸🇻"
    },
    {
      "name": "Guinea",
      "iso2": "GN",
      "iso3": "GIN",
      "unicodeFlag": "🇬🇳"
    },
    {
      "name": "Gambia",
      "iso2": "GM",
      "iso3": "GMB",
      "unicodeFlag": "🇬🇲"
    },
    {
      "name": "Greenland",
      "iso2": "GL",
      "iso3": "GRL",
      "unicodeFlag": "🇬🇱"
    },
    {
      "name": "Gibraltar",
      "iso2": "GI",
      "iso3": "GIB",
      "unicodeFlag": "🇬🇮"
    },
    {
      "name": "Ghana",
      "iso2": "GH",
      "iso3": "GHA",
      "unicodeFlag": "🇬🇭"
    },
    {
      "name": "Oman",
      "iso2": "OM",
      "iso3": "OMN",
      "unicodeFlag": "🇴🇲"
    },
    {
      "name": "Tunisia",
      "iso2": "TN",
      "iso3": "TUN",
      "unicodeFlag": "🇹🇳"
    },
    {
      "name": "Jordan",
      "iso2": "JO",
      "iso3": "JOR",
      "unicodeFlag": "🇯🇴"
    },
    {
      "name": "Croatia",
      "iso2": "HR",
      "iso3": "HRV",
      "unicodeFlag": "🇭🇷"
    },
    {
      "name": "Haiti",
      "iso2": "HT",
      "iso3": "HTI",
      "unicodeFlag": "🇭🇹"
    },
    {
      "name": "Hungary",
      "iso2": "HU",
      "iso3": "HUN",
      "unicodeFlag": "🇭🇺"
    },
    {
      "name": "Hong Kong",
      "iso2": "HK",
      "iso3": "HKG",
      "unicodeFlag": "🇭🇰"
    },
    {
      "name": "Honduras",
      "iso2": "HN",
      "iso3": "HND",
      "unicodeFlag": "🇭🇳"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "iso2": "HM",
      "iso3": "HMD",
      "unicodeFlag": "🇭🇲"
    },
    {
      "name": "Venezuela",
      "iso2": "VE",
      "iso3": "VEN",
      "unicodeFlag": "🇻🇪"
    },
    {
      "name": "Vatican City State (Holy See)",
      "iso2": "VA",
      "iso3": "VAT",
      "unicodeFlag": "🇻🇦"
    },
    {
      "name": "Puerto Rico",
      "iso2": "PR",
      "iso3": "PRI",
      "unicodeFlag": "🇵🇷"
    },
    {
      "name": "Palestinian Territory",
      "iso2": "PS",
      "iso3": "PSE",
      "unicodeFlag": "🇵🇸"
    },
    {
      "name": "Palau",
      "iso2": "PW",
      "iso3": "PLW",
      "unicodeFlag": "🇵🇼"
    },
    {
      "name": "Portugal",
      "iso2": "PT",
      "iso3": "PRT",
      "unicodeFlag": "🇵🇹"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "iso2": "SJ",
      "iso3": "SJM",
      "unicodeFlag": "🇸🇯"
    },
    {
      "name": "Paraguay",
      "iso2": "PY",
      "iso3": "PRY",
      "unicodeFlag": "🇵🇾"
    },
    {
      "name": "Iraq",
      "iso2": "IQ",
      "iso3": "IRQ",
      "unicodeFlag": "🇮🇶"
    },
    {
      "name": "Panama",
      "iso2": "PA",
      "iso3": "PAN",
      "unicodeFlag": "🇵🇦"
    },
    {
      "name": "French Polynesia",
      "iso2": "PF",
      "iso3": "PYF",
      "unicodeFlag": "🇵🇫"
    },
    {
      "name": "Papua New Guinea",
      "iso2": "PG",
      "iso3": "PNG",
      "unicodeFlag": "🇵🇬"
    },
    {
      "name": "Peru",
      "iso2": "PE",
      "iso3": "PER",
      "unicodeFlag": "🇵🇪"
    },
    {
      "name": "Pakistan",
      "iso2": "PK",
      "iso3": "PAK",
      "unicodeFlag": "🇵🇰"
    },
    {
      "name": "Philippines",
      "iso2": "PH",
      "iso3": "PHL",
      "unicodeFlag": "🇵🇭"
    },
    {
      "name": "Pitcairn",
      "iso2": "PN",
      "iso3": "PCN",
      "unicodeFlag": "🇵🇳"
    },
    {
      "name": "Poland",
      "iso2": "PL",
      "iso3": "POL",
      "unicodeFlag": "🇵🇱"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "iso2": "PM",
      "iso3": "SPM",
      "unicodeFlag": "🇵🇲"
    },
    {
      "name": "Zambia",
      "iso2": "ZM",
      "iso3": "ZMB",
      "unicodeFlag": "🇿🇲"
    },
    {
      "name": "Western Sahara",
      "iso2": "EH",
      "iso3": "ESH",
      "unicodeFlag": "🇪🇭"
    },
    {
      "name": "Estonia",
      "iso2": "EE",
      "iso3": "EST",
      "unicodeFlag": "🇪🇪"
    },
    {
      "name": "Egypt",
      "iso2": "EG",
      "iso3": "EGY",
      "unicodeFlag": "🇪🇬"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "iso2": "CC",
      "iso3": "CCK",
      "unicodeFlag": "🇨🇨"
    },
    {
      "name": "South Africa",
      "iso2": "ZA",
      "iso3": "ZAF",
      "unicodeFlag": "🇿🇦"
    },
    {
      "name": "Ecuador",
      "iso2": "EC",
      "iso3": "ECU",
      "unicodeFlag": "🇪🇨"
    },
    {
      "name": "Italy",
      "iso2": "IT",
      "iso3": "ITA",
      "unicodeFlag": "🇮🇹"
    },
    {
      "name": "Vietnam",
      "iso2": "VN",
      "iso3": "VNM",
      "unicodeFlag": "🇻🇳"
    },
    {
      "name": "Solomon Islands",
      "iso2": "SB",
      "iso3": "SLB",
      "unicodeFlag": "🇸🇧"
    },
    {
      "name": "Ethiopia",
      "iso2": "ET",
      "iso3": "ETH",
      "unicodeFlag": "🇪🇹"
    },
    {
      "name": "Somalia",
      "iso2": "SO",
      "iso3": "SOM",
      "unicodeFlag": "🇸🇴"
    },
    {
      "name": "Zimbabwe",
      "iso2": "ZW",
      "iso3": "ZWE",
      "unicodeFlag": "🇿🇼"
    },
    {
      "name": "Saudi Arabia",
      "iso2": "SA",
      "iso3": "SAU",
      "unicodeFlag": "🇸🇦"
    },
    {
      "name": "Spain",
      "iso2": "ES",
      "iso3": "ESP",
      "unicodeFlag": "🇪🇸"
    },
    {
      "name": "Eritrea",
      "iso2": "ER",
      "iso3": "ERI",
      "unicodeFlag": "🇪🇷"
    },
    {
      "name": "Montenegro",
      "iso2": "ME",
      "iso3": "MNE",
      "unicodeFlag": "🇲🇪"
    },
    {
      "name": "Moldova",
      "iso2": "MD",
      "iso3": "MDA",
      "unicodeFlag": "🇲🇩"
    },
    {
      "name": "Madagascar",
      "iso2": "MG",
      "iso3": "MDG",
      "unicodeFlag": "🇲🇬"
    },
    {
      "name": "Saint Martin",
      "iso2": "MF",
      "iso3": "MAF",
      "unicodeFlag": "🇲🇫"
    },
    {
      "name": "Morocco",
      "iso2": "MA",
      "iso3": "MAR",
      "unicodeFlag": "🇲🇦"
    },
    {
      "name": "Monaco",
      "iso2": "MC",
      "iso3": "MCO",
      "unicodeFlag": "🇲🇨"
    },
    {
      "name": "Uzbekistan",
      "iso2": "UZ",
      "iso3": "UZB",
      "unicodeFlag": "🇺🇿"
    },
    {
      "name": "Myanmar",
      "iso2": "MM",
      "iso3": "MMR",
      "unicodeFlag": "🇲🇲"
    },
    {
      "name": "Mali",
      "iso2": "ML",
      "iso3": "MLI",
      "unicodeFlag": "🇲🇱"
    },
    {
      "name": "Macau",
      "iso2": "MO",
      "iso3": "MAC",
      "unicodeFlag": "🇲🇴"
    },
    {
      "name": "Mongolia",
      "iso2": "MN",
      "iso3": "MNG",
      "unicodeFlag": "🇲🇳"
    },
    {
      "name": "Marshall Islands",
      "iso2": "MH",
      "iso3": "MHL",
      "unicodeFlag": "🇲🇭"
    },
    {
      "name": "Macedonia",
      "iso2": "MK",
      "iso3": "MKD",
      "unicodeFlag": "🇲🇰"
    },
    {
      "name": "Mauritius",
      "iso2": "MU",
      "iso3": "MUS",
      "unicodeFlag": "🇲🇺"
    },
    {
      "name": "Malta",
      "iso2": "MT",
      "iso3": "MLT",
      "unicodeFlag": "🇲🇹"
    },
    {
      "name": "Malawi",
      "iso2": "MW",
      "iso3": "MWI",
      "unicodeFlag": "🇲🇼"
    },
    {
      "name": "Maldives",
      "iso2": "MV",
      "iso3": "MDV",
      "unicodeFlag": "🇲🇻"
    },
    {
      "name": "Martinique",
      "iso2": "MQ",
      "iso3": "MTQ",
      "unicodeFlag": "🇲🇶"
    },
    {
      "name": "Northern Mariana Islands",
      "iso2": "MP",
      "iso3": "MNP",
      "unicodeFlag": "🇲🇵"
    },
    {
      "name": "Montserrat",
      "iso2": "MS",
      "iso3": "MSR",
      "unicodeFlag": "🇲🇸"
    },
    {
      "name": "Mauritania",
      "iso2": "MR",
      "iso3": "MRT",
      "unicodeFlag": "🇲🇷"
    },
    {
      "name": "Isle of Man",
      "iso2": "IM",
      "iso3": "IMN",
      "unicodeFlag": "🇮🇲"
    },
    {
      "name": "Uganda",
      "iso2": "UG",
      "iso3": "UGA",
      "unicodeFlag": "🇺🇬"
    },
    {
      "name": "Tanzania",
      "iso2": "TZ",
      "iso3": "TZA",
      "unicodeFlag": "🇹🇿"
    },
    {
      "name": "Malaysia",
      "iso2": "MY",
      "iso3": "MYS",
      "unicodeFlag": "🇲🇾"
    },
    {
      "name": "Mexico",
      "iso2": "MX",
      "iso3": "MEX",
      "unicodeFlag": "🇲🇽"
    },
    {
      "name": "Israel",
      "iso2": "IL",
      "iso3": "ISR",
      "unicodeFlag": "🇮🇱"
    },
    {
      "name": "France",
      "iso2": "FR",
      "iso3": "FRA",
      "unicodeFlag": "🇫🇷"
    },
    {
      "name": "British Indian Ocean Territory",
      "iso2": "IO",
      "iso3": "IOT",
      "unicodeFlag": "🇮🇴"
    },
    {
      "name": "Saint Helena",
      "iso2": "SH",
      "iso3": "SHN",
      "unicodeFlag": "🇸🇭"
    },
    {
      "name": "Finland",
      "iso2": "FI",
      "iso3": "FIN",
      "unicodeFlag": "🇫🇮"
    },
    {
      "name": "Fiji",
      "iso2": "FJ",
      "iso3": "FJI",
      "unicodeFlag": "🇫🇯"
    },
    {
      "name": "Falkland Islands",
      "iso2": "FK",
      "iso3": "FLK",
      "unicodeFlag": "🇫🇰"
    },
    {
      "name": "Micronesia",
      "iso2": "FM",
      "iso3": "FSM",
      "unicodeFlag": "🇫🇲"
    },
    {
      "name": "Faroe Islands",
      "iso2": "FO",
      "iso3": "FRO",
      "unicodeFlag": "🇫🇴"
    },
    {
      "name": "Nicaragua",
      "iso2": "NI",
      "iso3": "NIC",
      "unicodeFlag": "🇳🇮"
    },
    {
      "name": "Netherlands",
      "iso2": "NL",
      "iso3": "NLD",
      "unicodeFlag": "🇳🇱"
    },
    {
      "name": "Norway",
      "iso2": "NO",
      "iso3": "NOR",
      "unicodeFlag": "🇳🇴"
    },
    {
      "name": "Namibia",
      "iso2": "NA",
      "iso3": "NAM",
      "unicodeFlag": "🇳🇦"
    },
    {
      "name": "Vanuatu",
      "iso2": "VU",
      "iso3": "VUT",
      "unicodeFlag": "🇻🇺"
    },
    {
      "name": "New Caledonia",
      "iso2": "NC",
      "iso3": "NCL",
      "unicodeFlag": "🇳🇨"
    },
    {
      "name": "Niger",
      "iso2": "NE",
      "iso3": "NER",
      "unicodeFlag": "🇳🇪"
    },
    {
      "name": "Norfolk Island",
      "iso2": "NF",
      "iso3": "NFK",
      "unicodeFlag": "🇳🇫"
    },
    {
      "name": "Nigeria",
      "iso2": "NG",
      "iso3": "NGA",
      "unicodeFlag": "🇳🇬"
    },
    {
      "name": "New Zealand",
      "iso2": "NZ",
      "iso3": "NZL",
      "unicodeFlag": "🇳🇿"
    },
    {
      "name": "Nepal",
      "iso2": "NP",
      "iso3": "NPL",
      "unicodeFlag": "🇳🇵"
    },
    {
      "name": "Nauru",
      "iso2": "NR",
      "iso3": "NRU",
      "unicodeFlag": "🇳🇷"
    },
    {
      "name": "Niue",
      "iso2": "NU",
      "iso3": "NIU",
      "unicodeFlag": "🇳🇺"
    },
    {
      "name": "Cook Islands",
      "iso2": "CK",
      "iso3": "COK",
      "unicodeFlag": "🇨🇰"
    },
    {
      "name": "Kosovo",
      "iso2": "XK",
      "iso3": "XKX",
      "unicodeFlag": "🇽🇰"
    },
    {
      "name": "Ivory Coast",
      "iso2": "CI",
      "iso3": "CIV",
      "unicodeFlag": "🇨🇮"
    },
    {
      "name": "Switzerland",
      "iso2": "CH",
      "iso3": "CHE",
      "unicodeFlag": "🇨🇭"
    },
    {
      "name": "Colombia",
      "iso2": "CO",
      "iso3": "COL",
      "unicodeFlag": "🇨🇴"
    },
    {
      "name": "China",
      "iso2": "CN",
      "iso3": "CHN",
      "unicodeFlag": "🇨🇳"
    },
    {
      "name": "Cameroon",
      "iso2": "CM",
      "iso3": "CMR",
      "unicodeFlag": "🇨🇲"
    },
    {
      "name": "Chile",
      "iso2": "CL",
      "iso3": "CHL",
      "unicodeFlag": "🇨🇱"
    },
    {
      "name": "Cocos Islands",
      "iso2": "CC",
      "iso3": "CCK",
      "unicodeFlag": "🇨🇨"
    },
    {
      "name": "Canada",
      "iso2": "CA",
      "iso3": "CAN",
      "unicodeFlag": "🇨🇦"
    },
    {
      "name": "Congo",
      "iso2": "CG",
      "iso3": "COG",
      "unicodeFlag": "🇨🇬"
    },
    {
      "name": "Central African Republic",
      "iso2": "CF",
      "iso3": "CAF",
      "unicodeFlag": "🇨🇫"
    },
    {
      "name": "Democratic Republic of the Congo",
      "iso2": "CD",
      "iso3": "COD",
      "unicodeFlag": "🇨🇩"
    },
    {
      "name": "Czech Republic",
      "iso2": "CZ",
      "iso3": "CZE",
      "unicodeFlag": "🇨🇿"
    },
    {
      "name": "Cyprus",
      "iso2": "CY",
      "iso3": "CYP",
      "unicodeFlag": "🇨🇾"
    },
    {
      "name": "Christmas Island",
      "iso2": "CX",
      "iso3": "CXR",
      "unicodeFlag": "🇨🇽"
    },
    {
      "name": "Costa Rica",
      "iso2": "CR",
      "iso3": "CRI",
      "unicodeFlag": "🇨🇷"
    },
    {
      "name": "Curacao",
      "iso2": "CW",
      "iso3": "CUW",
      "unicodeFlag": "🇨🇼"
    },
    {
      "name": "Cape Verde",
      "iso2": "CV",
      "iso3": "CPV",
      "unicodeFlag": "🇨🇻"
    },
    {
      "name": "Cuba",
      "iso2": "CU",
      "iso3": "CUB",
      "unicodeFlag": "🇨🇺"
    },
    {
      "name": "Swaziland",
      "iso2": "SZ",
      "iso3": "SWZ",
      "unicodeFlag": "🇸🇿"
    },
    {
      "name": "Syria",
      "iso2": "SY",
      "iso3": "SYR",
      "unicodeFlag": "🇸🇾"
    },
    {
      "name": "Sint Maarten",
      "iso2": "SX",
      "iso3": "SXM",
      "unicodeFlag": "🇸🇽"
    },
    {
      "name": "Kyrgyzstan",
      "iso2": "KG",
      "iso3": "KGZ",
      "unicodeFlag": "🇰🇬"
    },
    {
      "name": "Kenya",
      "iso2": "KE",
      "iso3": "KEN",
      "unicodeFlag": "🇰🇪"
    },
    {
      "name": "South Sudan",
      "iso2": "SS",
      "iso3": "SSD",
      "unicodeFlag": "🇸🇸"
    },
    {
      "name": "Suriname",
      "iso2": "SR",
      "iso3": "SUR",
      "unicodeFlag": "🇸🇷"
    },
    {
      "name": "Kiribati",
      "iso2": "KI",
      "iso3": "KIR",
      "unicodeFlag": "🇰🇮"
    },
    {
      "name": "Cambodia",
      "iso2": "KH",
      "iso3": "KHM",
      "unicodeFlag": "🇰🇭"
    },
    {
      "name": "Saint Kitts and Nevis",
      "iso2": "KN",
      "iso3": "KNA",
      "unicodeFlag": "🇰🇳"
    },
    {
      "name": "Comoros",
      "iso2": "KM",
      "iso3": "COM",
      "unicodeFlag": "🇰🇲"
    },
    {
      "name": "Sao Tome and Principe",
      "iso2": "ST",
      "iso3": "STP",
      "unicodeFlag": "🇸🇹"
    },
    {
      "name": "Slovakia",
      "iso2": "SK",
      "iso3": "SVK",
      "unicodeFlag": "🇸🇰"
    },
    {
      "name": "South Korea",
      "iso2": "KR",
      "iso3": "KOR",
      "unicodeFlag": "🇰🇷"
    },
    {
      "name": "Slovenia",
      "iso2": "SI",
      "iso3": "SVN",
      "unicodeFlag": "🇸🇮"
    },
    {
      "name": "North Korea",
      "iso2": "KP",
      "iso3": "PRK",
      "unicodeFlag": "🇰🇵"
    },
    {
      "name": "Kuwait",
      "iso2": "KW",
      "iso3": "KWT",
      "unicodeFlag": "🇰🇼"
    },
    {
      "name": "Senegal",
      "iso2": "SN",
      "iso3": "SEN",
      "unicodeFlag": "🇸🇳"
    },
    {
      "name": "San Marino",
      "iso2": "SM",
      "iso3": "SMR",
      "unicodeFlag": "🇸🇲"
    },
    {
      "name": "Sierra Leone",
      "iso2": "SL",
      "iso3": "SLE",
      "unicodeFlag": "🇸🇱"
    },
    {
      "name": "Seychelles",
      "iso2": "SC",
      "iso3": "SYC",
      "unicodeFlag": "🇸🇨"
    },
    {
      "name": "Kazakhstan",
      "iso2": "KZ",
      "iso3": "KAZ",
      "unicodeFlag": "🇰🇿"
    },
    {
      "name": "Cayman Islands",
      "iso2": "KY",
      "iso3": "CYM",
      "unicodeFlag": "🇰🇾"
    },
    {
      "name": "Singapore",
      "iso2": "SG",
      "iso3": "SGP",
      "unicodeFlag": "🇸🇬"
    },
    {
      "name": "Sweden",
      "iso2": "SE",
      "iso3": "SWE",
      "unicodeFlag": "🇸🇪"
    },
    {
      "name": "Sudan",
      "iso2": "SD",
      "iso3": "SDN",
      "unicodeFlag": "🇸🇩"
    },
    {
      "name": "Dominican Republic",
      "iso2": "DO",
      "iso3": "DOM",
      "unicodeFlag": "🇩🇴"
    },
    {
      "name": "Dominica",
      "iso2": "DM",
      "iso3": "DMA",
      "unicodeFlag": "🇩🇲"
    },
    {
      "name": "Djibouti",
      "iso2": "DJ",
      "iso3": "DJI",
      "unicodeFlag": "🇩🇯"
    },
    {
      "name": "Denmark",
      "iso2": "DK",
      "iso3": "DNK",
      "unicodeFlag": "🇩🇰"
    },
    {
      "name": "British Virgin Islands",
      "iso2": "VG",
      "iso3": "VGB",
      "unicodeFlag": "🇻🇬"
    },
    {
      "name": "Germany",
      "iso2": "DE",
      "iso3": "DEU",
      "unicodeFlag": "🇩🇪"
    },
    {
      "name": "Yemen",
      "iso2": "YE",
      "iso3": "YEM",
      "unicodeFlag": "🇾🇪"
    },
    {
      "name": "Algeria",
      "iso2": "DZ",
      "iso3": "DZA",
      "unicodeFlag": "🇩🇿"
    },
    {
      "name": "United States",
      "iso2": "US",
      "iso3": "USA",
      "unicodeFlag": "🇺🇸"
    },
    {
      "name": "Uruguay",
      "iso2": "UY",
      "iso3": "URY",
      "unicodeFlag": "🇺🇾"
    },
    {
      "name": "Mayotte",
      "iso2": "YT",
      "iso3": "MYT",
      "unicodeFlag": "🇾🇹"
    },
    {
      "name": "United States Minor Outlying Islands",
      "iso2": "UM",
      "iso3": "UMI",
      "unicodeFlag": "🇺🇲"
    },
    {
      "name": "Lebanon",
      "iso2": "LB",
      "iso3": "LBN",
      "unicodeFlag": "🇱🇧"
    },
    {
      "name": "Saint Lucia",
      "iso2": "LC",
      "iso3": "LCA",
      "unicodeFlag": "🇱🇨"
    },
    {
      "name": "Laos",
      "iso2": "LA",
      "iso3": "LAO",
      "unicodeFlag": "🇱🇦"
    },
    {
      "name": "Tuvalu",
      "iso2": "TV",
      "iso3": "TUV",
      "unicodeFlag": "🇹🇻"
    },
    {
      "name": "Taiwan",
      "iso2": "TW",
      "iso3": "TWN",
      "unicodeFlag": "🇹🇼"
    },
    {
      "name": "Trinidad and Tobago",
      "iso2": "TT",
      "iso3": "TTO",
      "unicodeFlag": "🇹🇹"
    },
    {
      "name": "Turkey",
      "iso2": "TR",
      "iso3": "TUR",
      "unicodeFlag": "🇹🇷"
    },
    {
      "name": "Sri Lanka",
      "iso2": "LK",
      "iso3": "LKA",
      "unicodeFlag": "🇱🇰"
    },
    {
      "name": "Liechtenstein",
      "iso2": "LI",
      "iso3": "LIE",
      "unicodeFlag": "🇱🇮"
    },
    {
      "name": "Latvia",
      "iso2": "LV",
      "iso3": "LVA",
      "unicodeFlag": "🇱🇻"
    },
    {
      "name": "Tonga",
      "iso2": "TO",
      "iso3": "TON",
      "unicodeFlag": "🇹🇴"
    },
    {
      "name": "Lithuania",
      "iso2": "LT",
      "iso3": "LTU",
      "unicodeFlag": "🇱🇹"
    },
    {
      "name": "Luxembourg",
      "iso2": "LU",
      "iso3": "LUX",
      "unicodeFlag": "🇱🇺"
    },
    {
      "name": "Liberia",
      "iso2": "LR",
      "iso3": "LBR",
      "unicodeFlag": "🇱🇷"
    },
    {
      "name": "Lesotho",
      "iso2": "LS",
      "iso3": "LSO",
      "unicodeFlag": "🇱🇸"
    },
    {
      "name": "Thailand",
      "iso2": "TH",
      "iso3": "THA",
      "unicodeFlag": "🇹🇭"
    },
    {
      "name": "French Southern Territories",
      "iso2": "TF",
      "iso3": "ATF",
      "unicodeFlag": "🇹🇫"
    },
    {
      "name": "Togo",
      "iso2": "TG",
      "iso3": "TGO",
      "unicodeFlag": "🇹🇬"
    },
    {
      "name": "Chad",
      "iso2": "TD",
      "iso3": "TCD",
      "unicodeFlag": "🇹🇩"
    },
    {
      "name": "Turks and Caicos Islands",
      "iso2": "TC",
      "iso3": "TCA",
      "unicodeFlag": "🇹🇨"
    },
    {
      "name": "Libya",
      "iso2": "LY",
      "iso3": "LBY",
      "unicodeFlag": "🇱🇾"
    },
    {
      "name": "Vatican",
      "iso2": "VA",
      "iso3": "VAT",
      "unicodeFlag": "🇻🇦"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "iso2": "VC",
      "iso3": "VCT",
      "unicodeFlag": "🇻🇨"
    },
    {
      "name": "United Arab Emirates",
      "iso2": "AE",
      "iso3": "ARE",
      "unicodeFlag": "🇦🇪"
    },
    {
      "name": "Andorra",
      "iso2": "AD",
      "iso3": "AND",
      "unicodeFlag": "🇦🇩"
    },
    {
      "name": "Antigua and Barbuda",
      "iso2": "AG",
      "iso3": "ATG",
      "unicodeFlag": "🇦🇬"
    },
    {
      "name": "Afghanistan",
      "iso2": "AF",
      "iso3": "AFG",
      "unicodeFlag": "🇦🇫"
    },
    {
      "name": "Anguilla",
      "iso2": "AI",
      "iso3": "AIA",
      "unicodeFlag": "🇦🇮"
    },
    {
      "name": "U.S. Virgin Islands",
      "iso2": "VI",
      "iso3": "VIR",
      "unicodeFlag": "🇻🇮"
    },
    {
      "name": "Iceland",
      "iso2": "IS",
      "iso3": "ISL",
      "unicodeFlag": "🇮🇸"
    },
    {
      "name": "Iran",
      "iso2": "IR",
      "iso3": "IRN",
      "unicodeFlag": "🇮🇷"
    },
    {
      "name": "Armenia",
      "iso2": "AM",
      "iso3": "ARM",
      "unicodeFlag": "🇦🇲"
    },
    {
      "name": "Albania",
      "iso2": "AL",
      "iso3": "ALB",
      "unicodeFlag": "🇦🇱"
    },
    {
      "name": "Angola",
      "iso2": "AO",
      "iso3": "AGO",
      "unicodeFlag": "🇦🇴"
    },
    {
      "name": "Antarctica",
      "iso2": "AQ",
      "iso3": "ATA",
      "unicodeFlag": "🇦🇶"
    },
    {
      "name": "American Samoa",
      "iso2": "AS",
      "iso3": "ASM",
      "unicodeFlag": "🇦🇸"
    },
    {
      "name": "Argentina",
      "iso2": "AR",
      "iso3": "ARG",
      "unicodeFlag": "🇦🇷"
    },
    {
      "name": "Australia",
      "iso2": "AU",
      "iso3": "AUS",
      "unicodeFlag": "🇦🇺"
    },
    {
      "name": "Austria",
      "iso2": "AT",
      "iso3": "AUT",
      "unicodeFlag": "🇦🇹"
    },
    {
      "name": "Aruba",
      "iso2": "AW",
      "iso3": "ABW",
      "unicodeFlag": "🇦🇼"
    },
    {
      "name": "India",
      "iso2": "IN",
      "iso3": "IND",
      "unicodeFlag": "🇮🇳"
    },
    {
      "name": "Aland Islands",
      "iso2": "AX",
      "iso3": "ALA",
      "unicodeFlag": "🇦🇽"
    },
    {
      "name": "Azerbaijan",
      "iso2": "AZ",
      "iso3": "AZE",
      "unicodeFlag": "🇦🇿"
    },
    {
      "name": "Ireland",
      "iso2": "IE",
      "iso3": "IRL",
      "unicodeFlag": "🇮🇪"
    },
    {
      "name": "Indonesia",
      "iso2": "ID",
      "iso3": "IDN",
      "unicodeFlag": "🇮🇩"
    },
    {
      "name": "Ukraine",
      "iso2": "UA",
      "iso3": "UKR",
      "unicodeFlag": "🇺🇦"
    },
    {
      "name": "Qatar",
      "iso2": "QA",
      "iso3": "QAT",
      "unicodeFlag": "🇶🇦"
    },
    {
      "name": "Mozambique",
      "iso2": "MZ",
      "iso3": "MOZ",
      "unicodeFlag": "🇲🇿"
    }
  ]
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [city, setCity] = useState([]);
  const [weatherData, setWeatherData] = useState();
  const [weather7days, setWeather7days] = useState();
  const [weatherHourly, setWeatherHourly] = useState();
  const today = new Date();
  const targetHourly = [7, 12, 16, 22];
  const [loading, setLoading] = useState(false);
  const [haveData, setHaveData] = useState();


  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.iso2.toLowerCase()}`} style={{ marginRight: "5px" }} />
          <div>{option.name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div className="flex align-items-center">
        <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.iso2.toLowerCase()}`} style={{ marginRight: "5px" }} />
        <div>{option.name}</div>
      </div>
    );
  };

  const fetchCityDataByCountry = async (value) => {
    const apiURL = "https://countriesnow.space/api/v0.1/countries";
    try {
      const response = await fetch(apiURL, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers as needed
        },
      })

      const responseData = await response.json();
      const filteredCity = responseData.data.filter(country => country.country === value);
      (JSON.stringify(filteredCity) !== "[]") ? setCity(Array.from(filteredCity[0].cities)) : setCity([]);

    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      // console.log("thanh pho" + city);
      const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=e2d82487c85e79ee445fe8191243329d&units=metric")
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setHaveData(true);
      } else {
        console.log("Error when fetching dataaa");
        setHaveData(false);
      }
    } catch (error) {
      console.log("Error when fetching data", error);
      setHaveData(false);
    }
    setLoading(false);
  }

  const fetchWeeklyData = async () => {
    setLoading(true);
    try {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=e2d82487c85e79ee445fe8191243329d&units=metric")
        .then(response => response.json())
        .then(data => {
          // Extract latitude and longitude from the response
          const { coord } = data;
          const { lat, lon } = coord;

          // Then use latitude and longitude to fetch the weekly forecast
          return fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly&appid=e2d82487c85e79ee445fe8191243329d&units=metric&units=metric");
        })
        .then(response => response.json())
        .then(data => {
          setWeather7days(data.daily)
          setHaveData(true);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });

    }
    catch (error) {
      console.log("Error when fetching data", error);
      setHaveData(false)
    }
    setLoading(false);
  }

  const fetchTimelyDay = () => {
    setLoading(true)
    try {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=" + selectedCity + "&appid=e2d82487c85e79ee445fe8191243329d&units=metric")
        .then(response => response.json())
        .then(data => {
          const { coord } = data;
          const { lat, lon } = coord
          return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,daily,minutely&appid=e2d82487c85e79ee445fe8191243329d&units=metric`);
        })
        .then(response => response.json())
        .then(data => {
          const hourlyData = data.hourly;
          // console.log("1" + JSON.stringify(hourlyData))
          const weatherDataTagetHourly = hourlyData.filter(hour => {
            const hourDate = new Date(hour.dt * 1000);
            const hourOfDay = hourDate.getUTCHours();
            const hourDay = hourDate.getUTCDate();
            return hourDay === today.getUTCDate() && targetHourly.includes(hourOfDay);
          });
          setWeatherHourly(weatherDataTagetHourly);
          setHaveData(true);
        })
        .catch(error => {
          console.log("Error fetching weather data" + error);
        })
    } catch (error) {
      console.log("Error when fetching data" + error)
      setHaveData(false);
    }
    setLoading(false);
  }

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (selectedCity && selectedCountry) {
      fetchData();
      fetchWeeklyData();
      fetchTimelyDay();
      console.log("vãi l" + haveData);
    } else {
      setHaveData(false)
    }
  }

  const onChangeCountry = (e) => {

    const countryName = e.target.value.name;
    setSelectedCountry(e.target.value);
    fetchCityDataByCountry(countryName);
    console.log(e.target.value.iso2)

  }

  const onChangeCity = (e) => {
    console.log("city selected " + e.target.value);
    setSelectedCity(e.target.value);
  }
  const covertUnixToGMT = (value) => {
    // Convert Unix timestamp to milliseconds by multiplying with 1000
    const milliseconds = value * 1000;

    // Create a new Date object using the milliseconds
    const date = new Date(milliseconds);

    // Get the GMT time string using the built-in Date methods
    const gmtTimeString = date.toGMTString();
    const parts = gmtTimeString.split(' ');

    // Construct the updated GMT time string without the time part
    const updatedGMTString = parts.slice(0, 4).join(' ');
    return updatedGMTString;
  }

  const convertUnixToHourGMT = (value) => {
    // Convert Unix timestamp to milliseconds by multiplying with 1000
    const milliseconds = value * 1000;

    // Create a new Date object using the milliseconds
    const date = new Date(milliseconds);

    // Get the GMT time string using the built-in Date methods
    const gmtTimeString = date.toGMTString();
    const parts = gmtTimeString.split(' ');

    // Construct the updated GMT time string without the time part
    const hoursTime = parts[4];
    return hoursTime;
  }

  return (
    <div className='weather-app'>
      <div className='app-header'>
        <form className="form-submit flex" onSubmit={handleOnsubmit}>
          <div className="card flex justify-content-center">
            <Dropdown value={selectedCountry} onChange={onChangeCountry} options={countries} optionLabel="name" placeholder="Select a Country"
              filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-1rem" style={{ width: "400px" }} />
            <Dropdown value={selectedCity} onChange={onChangeCity} options={city}
              placeholder="Select a City" className="w-full md:w-14rem" />
          </div>
          <div className="card flex justify-content-center">
            <Button type="submit" label="Check" icon="pi pi-check" />
          </div>
        </form>
      </div>
      <div>
        {(haveData === true) && (<div className='app-body'>
          {weatherData && (
            <div className='left-col'>
              <div className='current-forecast'>
                <h3>CURRENT WEATHER</h3>
                <div className='today-content'>
                  {loading && <p>loading</p>}
                  <div className='weather-info'>
                    <div className='location'>
                      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                      <span>{covertUnixToGMT(weatherData.dt)}</span>
                    </div>
                    <div className='temperature'>
                      <h2>Temperature: {weatherData.main.temp}°C</h2>
                      <span>{weatherData.weather[0].description}</span>
                    </div>
                    <div className='weather-describe'>
                      <div className="weather-icon"><img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} /></div>
                      <span>{weatherData.weather[0].main}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='air-conditions'>
                <h3>AIR CONDITIONS</h3>
                <div className='details'>
                  <p>Real feel: {weatherData.main.feels_like}°C</p>
                  <p>Humidity: {weatherData.main.humidity}%</p>
                  <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
              </div>
              <div className='current-weather'>
                <h3>TODAY'S FORECAST</h3>
                <div className='list-today-forecasts'>
                  {weatherHourly && weatherHourly.map((item) => (
                    <div key={item.temp} className='card-item'>
                      <span> {convertUnixToHourGMT(item.dt)}</span>
                      <div className="weather-icon"><img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} /></div>
                      <span className='temp'>{item.temp}°C</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
          }
          <div className='right-col'>
            {weather7days && (<div className='weekly-forecast'><h3>WEEKLY FORECAST</h3></div>)}
            <div className='weekly-info-item'>
              {weather7days && Object.keys(weather7days).map((item, i) => (
                <div key={i} className="column">
                  <div className="card-counter">
                    <div className="row">
                      <h3 className='datetime-text'>{covertUnixToGMT(weather7days[item].dt)}</h3>
                      <div className="weekly-weather-image"><img src={`http://openweathermap.org/img/w/${weather7days[item].weather[0].icon}.png`} /> <span>{weather7days[item].weather[0].description}</span></div>
                    </div>
                    <div className="row">
                      <h3>Day: {weather7days[item].temp.day}°C - Night: {weather7days[item].temp.night}°C</h3>
                      <p>Clouds: {weather7days[item].clouds} %</p>
                    </div>
                    <div className="row">
                      <h3>Wind speed: {weather7days[item].wind_speed}m/s</h3>
                      <p>Humidity (độ ẩm) : {weather7days[item].humidity}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div >
        </div >)}
        {(haveData !== true) && (
          <div className="error-container">
            <div className="error-code">404</div>
            <div className="error-message">Oops! Chúng tôi không có trạm khí tượng ở đây</div>
            <div className="card flex justify-content-center">
              <Button type="button" href="/" label="Go back to home" className=' back-link' icon="pi pi-check" />
            </div>
          </div>
        )}
      </div>
    </div >
  );
}

export default App;
