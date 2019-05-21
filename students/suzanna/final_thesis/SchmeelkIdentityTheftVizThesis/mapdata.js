var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
		width: "700", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",
    
		//State defaults
    state_description: "Breach Count: <strong>0</strong> <br> Individuals Affected: <strong>0</strong>",
    state_color: "#F8F8F8",
    state_hover_color: "#c23",
    state_url: "https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#FFFFFF",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
   
		//Zoom settings
		manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>40,800</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    AK: {
      name: "Alaska",
      description: "Breach Count: <strong>3</strong> <br> Individuals Affected: <strong>51,447</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    FL: {
      name: "Florida",
      description: "Breach Count: <strong>21</strong> <br> Individuals Affected: <strong>695,353</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default",
      inactive: "no"
    },
    NH: {
      name: "New Hampshire",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    VT: {
      name: "Vermont",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>72,224</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    ME: {
      name: "Maine",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    RI: {
      name: "Rhode Island",
      description: "Breach Count: <strong>2</strong> <br> Individuals Affected: <strong>7,212</strong>",
      color: "#E0E0E0",
      hover_color: "default",
      url: "default"
    },
    NY: {
      name: "New York",
      description: "Breach Count: <strong>14</strong> <br> Individuals Affected: <strong>843,738</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    PA: {
      name: "Pennsylvania",
      description: "Breach Count: <strong>8</strong> <br> Individuals Affected: <strong>361,003</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    NJ: {
      name: "New Jersey",
      description: "Breach Count: <strong>5</strong> <br> Individuals Affected: <strong>39,907</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    DE: {
      name: "Delaware",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>58,591</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    MD: {
      name: "Maryland",
      description: "Breach Count: <strong>4</strong> <br> Individuals Affected: <strong>15,982</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    VA: {
      name: "Virginia",
      description: "Breach Count: <strong>5</strong> <br> Individuals Affected: <strong>30,426</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    WV: {
      name: "West Virginia",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>6,282</strong>",
      color: "#E0E0E0",
      hover_color: "default",
      url: "default"
    },
    OH: {
      name: "Ohio",
      description: "Breach Count: <strong>12</strong> <br> Individuals Affected: <strong>141,699</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    IN: {
      name: "Indiana",
      description: "Breach Count: <strong>9</strong> <br> Individuals Affected: <strong>688,523</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    IL: {
      name: "Illinois",
      description: "Breach Count: <strong>14</strong> <br> Individuals Affected: <strong>86,904</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    CT: {
      name: "Connecticut",
      description: "Breach Count: <strong>8</strong> <br> Individuals Affected: <strong>400,216</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    WI: {
      name: "Wisconsin",
      description: "Breach Count: <strong>6</strong> <br> Individuals Affected: <strong>268,692</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    NC: {
      name: "North Carolina",
      description: "Breach Count: <strong>4</strong> <br> Individuals Affected: <strong>2,702,309</strong>",
      color: "#000000",
      hover_color: "default",
      url: "default"
    },
    DC: {
      name: "District of Columbia",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>19,254</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    MA: {
      name: "Massachusetts",
      description: "Breach Count: <strong>10</strong> <br> Individuals Affected: <strong>267,553</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    TN: {
      name: "Tennessee",
      description: "Breach Count: <strong>5</strong> <br> Individuals Affected: <strong>10,056</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    AR: {
      name: "Arkansas",
      description: "Breach Count: <strong>3</strong> <br> Individuals Affected: <strong>213,759</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    MO: {
      name: "Missouri",
      description: "Breach Count: <strong>9</strong> <br> Individuals Affected: <strong>450,175</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    GA: {
      name: "Georgia",
      description: "Breach Count: <strong>11</strong> <br> Individuals Affected: <strong>1,196,434</strong>",
      color: "#383838",
      hover_color: "default",
      url: "default"
    },
    SC: {
      name: "South Carolina",
      description: "Breach Count: <strong>3</strong> <br> Individuals Affected: <strong>91,242</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    KY: {
      name: "Kentucky",
      description: "Breach Count: <strong>6</strong> <br> Individuals Affected: <strong>28,809</strong>",
      color: "#A9A9A9",
      zoomable: "no",
      hover_color: "default",
      url: "default"
    },
    AL: {
      name: "Alabama",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>27,000</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    LA: {
      name: "Louisiana",
      description: "Breach Count: <strong>2</strong> <br> Individuals Affected: <strong>32,587</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    MS: {
      name: "Mississippi",
      description: "Breach Count: <strong>2</strong> <br> Individuals Affected: <strong>50,642</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    IA: {
      name: "Iowa",
      description: "Breach Count: <strong>9</strong> <br> Individuals Affected: <strong>1,504,021</strong>",
      color: "#383838",
      hover_color: "default",
      url: "default"
    },
    MN: {
      name: "Minnesota",
      description: "Breach Count: <strong>15</strong> <br> Individuals Affected: <strong>105,641</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    OK: {
      name: "Oklahoma",
      description: "Breach Count: <strong>2</strong> <br> Individuals Affected: <strong>2,034</strong>",
      color: "#E0E0E0",
      hover_color: "default",
      url: "default"
    },
    TX: {
      name: "Texas",
      description: "Breach Count: <strong>31</strong> <br> Individuals Affected: <strong>1,599,638</strong>",
      color: "#383838",
      hover_color: "default",
      url: "default"
    },
    NM: {
      name: "New Mexico",
      description: "Breach Count: <strong>2</strong> <br> Individuals Affected: <strong>4,784</strong>",
      color: "#E0E0E0",
      hover_color: "default",
      url: "default"
    },
    KS: {
      name: "Kansas",
      description: "Breach Count: <strong>6</strong> <br> Individuals Affected: <strong>99,247</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    NE: {
      name: "Nebraska",
      description: "Breach Count: <strong>5</strong> <br> Individuals Affected: <strong>121,495</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    SD: {
      name: "South Dakota",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>696</strong>",
      color: "#F8F8F8",
      hover_color: "default",
      url: "default"
    },
    ND: {
      name: "North Dakota",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>1,813</strong>",
      color: "#E0E0E0",
      hover_color: "default",
      url: "default"
    },
    WY: {
      name: "Wyoming",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    MT: {
      name: "Montana",
      description: "Breach Count: <strong>2</strong> <br> Individuals Affected: <strong>14,435</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    CO: {
      name: "Colorado",
      description: "Breach Count: <strong>5</strong> <br> Individuals Affected: <strong>31,339</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    UT: {
      name: "Utah",
      description: "Breach Count: <strong>4</strong> <br> Individuals Affected: <strong>184,062</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    AZ: {
      name: "Arizona",
      description: "Breach Count: <strong>8</strong> <br> Individuals Affected: <strong>65,966</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    NV: {
      name: "Nevada",
      description: "Breach Count: <strong>1</strong> <br> Individuals Affected: <strong>3,200</strong>",
      color: "#E0E0E0",
      hover_color: "default",
      url: "default"
    },
    OR: {
      name: "Oregon",
      description: "Breach Count: <strong>9</strong> <br> Individuals Affected: <strong>54,001</strong>",
      color: "#909090",
      hover_color: "default",
      url: "default"
    },
    WA: {
      name: "Washington",
      description: "Breach Count: <strong>9</strong> <br> Individuals Affected: <strong>1,421,912</strong>",
      color: "#383838",
      hover_color: "default",
      url: "default"
    },
    CA: {
      name: "California",
      description: "Breach Count: <strong>27</strong> <br> Individuals Affected: <strong>385,883</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    MI: {
      name: "Michigan",
      description: "Breach Count: <strong>11</strong> <br> Individuals Affected: <strong>121,388</strong>",
      color: "#696969",
      hover_color: "default",
      url: "default"
    },
    ID: {
      name: "Idaho",
      description: "Breach Count: <strong>3</strong> <br> Individuals Affected: <strong>14,062</strong>",
      color: "#A9A9A9",
      hover_color: "default",
      url: "default"
    },
    GU: {
      name: "Guam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default",
      hide: "yes"
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};
