import { State } from './../../state/app.state';
import { State as CountryState } from './../../pages/country/state/reducers/country.reducers';
import { State as CountriesState } from './../../pages/countries/state/reducers/countries.reducers';

export const rootInitalState: State = {
  routes: { routes: [] },
  theme: { isDarkTheme: true },


}

export const countryRootInitalState: CountryState = {
  routes: { routes: [] },
  theme: { isDarkTheme: true },
  country:
  {
    country: undefined,
    error: "",
    loading: false,
    borderCountries: [],
    borderCountriesLoading: false,
    borderCountriesError: ""
  }

}

export const countriesRootInitalState: CountriesState = {
  routes: { routes: [] },
  theme: { isDarkTheme: true },
  countries: {
    countries: [],
    error: "",
    loading: false
  }

}

export const TESTING_CONSTANTS = {
  BASE_URL: 'https://restcountries.com/v3.1',
  COUNTRY_NAME: 'Moldova',
  BORDER_COUNTRIES_CODE: ['arg', 'nig'],
  REGION: "Africa",
  COUNTRIES: [
    {
      "name": {
        "common": "Uruguay",
        "official": "Oriental Republic of Uruguay",
        "nativeName": {
          "spa": {
            "official": "República Oriental del Uruguay",
            "common": "Uruguay"
          }
        }
      },
      "tld": [
        ".uy"
      ],
      "cca2": "UY",
      "ccn3": "858",
      "cca3": "URY",
      "cioc": "URU",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "UYU": {
          "name": "Uruguayan peso",
          "symbol": "$"
        }
      },
      "idd": {
        "root": "+5",
        "suffixes": [
          "98"
        ]
      },
      "capital": [
        "Montevideo"
      ],
      "altSpellings": [
        "UY",
        "Oriental Republic of Uruguay",
        "República Oriental del Uruguay"
      ],
      "region": "Americas",
      "subregion": "South America",
      "languages": {
        "spa": "Spanish"
      },
      "translations": {
        "ara": {
          "official": "جمهورية الأوروغواي الشرقية",
          "common": "الأوروغواي"
        },
        "ces": {
          "official": "Uruguayská východní republika",
          "common": "Uruguay"
        },
        "cym": {
          "official": "Oriental Republic of Uruguay",
          "common": "Uruguay"
        },
        "deu": {
          "official": "Republik Östlich des Uruguay",
          "common": "Uruguay"
        },
        "est": {
          "official": "Uruguay Idavabariik",
          "common": "Uruguay"
        },
        "fin": {
          "official": "Uruguayn itäinen tasavalta",
          "common": "Uruguay"
        },
        "fra": {
          "official": "République orientale de l'Uruguay",
          "common": "Uruguay"
        },
        "hrv": {
          "official": "Orijentalna Republika Urugvaj",
          "common": "Urugvaj"
        },
        "hun": {
          "official": "Uruguayi Keleti Köztársaság",
          "common": "Uruguay"
        },
        "ita": {
          "official": "Repubblica Orientale dell'Uruguay",
          "common": "Uruguay"
        },
        "jpn": {
          "official": "ウルグアイ東方共和国",
          "common": "ウルグアイ"
        },
        "kor": {
          "official": "우루과이 동방 공화국",
          "common": "우루과이"
        },
        "nld": {
          "official": "Oosterse Republiek Uruguay",
          "common": "Uruguay"
        },
        "per": {
          "official": "جمهوری اروگوئه",
          "common": "اروگوئه"
        },
        "pol": {
          "official": "Wschodnia Republika Urugwaju",
          "common": "Urugwaj"
        },
        "por": {
          "official": "República Oriental do Uruguai",
          "common": "Uruguai"
        },
        "rus": {
          "official": "Восточной Республики Уругвай",
          "common": "Уругвай"
        },
        "slk": {
          "official": "Uruguajská východná republika",
          "common": "Uruguaj"
        },
        "spa": {
          "official": "República Oriental del Uruguay",
          "common": "Uruguay"
        },
        "swe": {
          "official": "Republiken Uruguay",
          "common": "Uruguay"
        },
        "urd": {
          "official": "جمہوریہ شرقیہ یوراگوئے",
          "common": "یوراگوئے"
        },
        "zho": {
          "official": "乌拉圭东岸共和国",
          "common": "乌拉圭"
        }
      },
      "latlng": [
        -33,
        -56
      ],
      "landlocked": false,
      "borders": [
        "ARG",
        "BRA"
      ],
      "area": 181034,
      "demonyms": {
        "eng": {
          "f": "Uruguayan",
          "m": "Uruguayan"
        },
        "fra": {
          "f": "Uruguayenne",
          "m": "Uruguayen"
        }
      },
      "flag": "🇺🇾",
      "maps": {
        "googleMaps": "https://goo.gl/maps/tiQ9Baekb1jQtDSD9",
        "openStreetMaps": "https://www.openstreetmap.org/relation/287072"
      },
      "population": 3473727,
      "gini": {
        "2019": 39.7
      },
      "fifa": "URU",
      "car": {
        "signs": [
          "ROU"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC-03:00"
      ],
      "continents": [
        "South America"
      ],
      "flags": {
        "png": "https://flagcdn.com/w320/uy.png",
        "svg": "https://flagcdn.com/uy.svg"
      },
      "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/uy.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/uy.svg"
      },
      "startOfWeek": "monday",
      "capitalInfo": {
        "latlng": [
          -34.85,
          -56.17
        ]
      },
      "postalCode": {
        "format": "#####",
        "regex": "^(\\d{5})$"
      }
    },
    {
      "name": {
        "common": "Paraguay",
        "official": "Republic of Paraguay",
        "nativeName": {
          "grn": {
            "official": "Tetã Paraguái",
            "common": "Paraguái"
          },
          "spa": {
            "official": "República de Paraguay",
            "common": "Paraguay"
          }
        }
      },
      "tld": [
        ".py"
      ],
      "cca2": "PY",
      "ccn3": "600",
      "cca3": "PRY",
      "cioc": "PAR",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
        "PYG": {
          "name": "Paraguayan guaraní",
          "symbol": "₲"
        }
      },
      "idd": {
        "root": "+5",
        "suffixes": [
          "95"
        ]
      },
      "capital": [
        "Asunción"
      ],
      "altSpellings": [
        "PY",
        "Republic of Paraguay",
        "República del Paraguay",
        "Tetã Paraguái"
      ],
      "region": "Americas",
      "subregion": "South America",
      "languages": {
        "grn": "Guaraní",
        "spa": "Spanish"
      },
      "translations": {
        "ara": {
          "official": "جمهورية باراغواي",
          "common": "باراغواي"
        },
        "ces": {
          "official": "Paraguayská republika",
          "common": "Paraguay"
        },
        "cym": {
          "official": "Republic of Paraguay",
          "common": "Paraguay"
        },
        "deu": {
          "official": "Republik Paraguay",
          "common": "Paraguay"
        },
        "est": {
          "official": "Paraguay Vabariik",
          "common": "Paraguay"
        },
        "fin": {
          "official": "Paraguayn tasavalta",
          "common": "Paraguay"
        },
        "fra": {
          "official": "République du Paraguay",
          "common": "Paraguay"
        },
        "hrv": {
          "official": "Republika Paragvaj",
          "common": "Paragvaj"
        },
        "hun": {
          "official": "Paraguayi Köztársaság",
          "common": "Paraguay"
        },
        "ita": {
          "official": "Repubblica del Paraguay",
          "common": "Paraguay"
        },
        "jpn": {
          "official": "パラグアイ共和国",
          "common": "パラグアイ"
        },
        "kor": {
          "official": "파라과이 공화국",
          "common": "파라과이"
        },
        "nld": {
          "official": "Republiek Paraguay",
          "common": "Paraguay"
        },
        "per": {
          "official": "جمهوری پاراگوئه",
          "common": "پاراگوئه"
        },
        "pol": {
          "official": "Republika Paragwaju",
          "common": "Paragwaj"
        },
        "por": {
          "official": "República do Paraguai",
          "common": "Paraguai"
        },
        "rus": {
          "official": "Республика Парагвай",
          "common": "Парагвай"
        },
        "slk": {
          "official": "Paraguajská republika",
          "common": "Paraguaj"
        },
        "spa": {
          "official": "República de Paraguay",
          "common": "Paraguay"
        },
        "swe": {
          "official": "Republiken Paraguay",
          "common": "Paraguay"
        },
        "urd": {
          "official": "جمہوریہ پیراگوئے",
          "common": "پیراگوئے"
        },
        "zho": {
          "official": "巴拉圭共和国",
          "common": "巴拉圭"
        }
      },
      "latlng": [
        -23,
        -58
      ],
      "landlocked": true,
      "borders": [
        "ARG",
        "BOL",
        "BRA"
      ],
      "area": 406752,
      "demonyms": {
        "eng": {
          "f": "Paraguayan",
          "m": "Paraguayan"
        },
        "fra": {
          "f": "Paraguayenne",
          "m": "Paraguayen"
        }
      },
      "flag": "🇵🇾",
      "maps": {
        "googleMaps": "https://goo.gl/maps/JtnqG73WJn1Gx6mz6",
        "openStreetMaps": "https://www.openstreetmap.org/relation/287077"
      },
      "population": 7132530,
      "gini": {
        "2019": 45.7
      },
      "fifa": "PAR",
      "car": {
        "signs": [
          "PY"
        ],
        "side": "right"
      },
      "timezones": [
        "UTC-04:00"
      ],
      "continents": [
        "South America"
      ],
      "flags": {
        "png": "https://flagcdn.com/w320/py.png",
        "svg": "https://flagcdn.com/py.svg"
      },
      "coatOfArms": {
        "png": "https://mainfacts.com/media/images/coats_of_arms/py.png",
        "svg": "https://mainfacts.com/media/images/coats_of_arms/py.svg"
      },
      "startOfWeek": "monday",
      "capitalInfo": {
        "latlng": [
          -25.28,
          -57.57
        ]
      },
      "postalCode": {
        "format": "####",
        "regex": "^(\\d{4})$"
      }
    }
  ]
}
