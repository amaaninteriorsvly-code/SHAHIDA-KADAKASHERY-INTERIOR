var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "ENTRY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15420647489120576,
          "pitch": 0.5635716145102876,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living-1",
      "name": "LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.04438216744862089,
          "pitch": 0.6009142603196302,
          "rotation": 0,
          "target": "2-living-2"
        },
        {
          "yaw": -1.6406857261883907,
          "pitch": 0.4384864087398732,
          "rotation": 0,
          "target": "3-family-living-1"
        },
        {
          "yaw": 1.579423999900147,
          "pitch": 0.6718039740881085,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-2",
      "name": "LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.22906968128305571,
          "pitch": 0.520389287524166,
          "rotation": 0,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-family-living-1",
      "name": "FAMILY LIVING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.16934741941169662,
          "pitch": 0.5779655762813434,
          "rotation": 0,
          "target": "4-family-living-2"
        },
        {
          "yaw": 2.004428789979893,
          "pitch": 0.6337064324259707,
          "rotation": 1.5707963267948966,
          "target": "1-living-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-family-living-2",
      "name": "FAMILY LIVING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.5318727923740845,
          "pitch": 0.41176835760346897,
          "rotation": 0,
          "target": "1-living-1"
        },
        {
          "yaw": 1.5011848782513706,
          "pitch": 0.4499799380079015,
          "rotation": 0,
          "target": "5-passage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-passage-1",
      "name": "PASSAGE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 3.1139694409346976,
          "pitch": 0.445069720089192,
          "rotation": 0,
          "target": "3-family-living-1"
        },
        {
          "yaw": 0.16130795956656385,
          "pitch": 0.37381880694014313,
          "rotation": 0,
          "target": "6-dining-1"
        },
        {
          "yaw": -1.3716881114967343,
          "pitch": -0.28541808627350207,
          "rotation": 0,
          "target": "9-stair-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-1",
      "name": "DINING 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.38025146933629017,
          "pitch": -0.13728253427218462,
          "rotation": 0,
          "target": "9-stair-landing"
        },
        {
          "yaw": 0.2332764466411117,
          "pitch": 0.5856343683858913,
          "rotation": 0,
          "target": "7-dining-2"
        },
        {
          "yaw": -2.0610144272411617,
          "pitch": 0.9722786571782294,
          "rotation": 0,
          "target": "17-bedroom-2"
        },
        {
          "yaw": 1.13849101929517,
          "pitch": 0.6412616511596525,
          "rotation": 0,
          "target": "28-kitchen-1"
        },
        {
          "yaw": 1.8270896483771164,
          "pitch": 0.6617663335394912,
          "rotation": 0,
          "target": "14-bedroom-1"
        },
        {
          "yaw": -1.049971561610338,
          "pitch": 0.6609797842607659,
          "rotation": 0,
          "target": "5-passage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining-2",
      "name": "DINING 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7385526353851724,
          "pitch": 0.30539912253149915,
          "rotation": 0,
          "target": "6-dining-1"
        },
        {
          "yaw": 0.7588096535437021,
          "pitch": 0.37600338064154926,
          "rotation": 0,
          "target": "8-wash-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wash-area",
      "name": "WASH AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 2.78845267278043,
          "pitch": 0.6820752624555766,
          "rotation": 0,
          "target": "6-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stair-landing",
      "name": "STAIR LANDING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.477699153595072,
          "pitch": 0.6912498928751134,
          "rotation": 0,
          "target": "5-passage-1"
        },
        {
          "yaw": 0.11836538619137293,
          "pitch": -0.04215098362599612,
          "rotation": 0,
          "target": "10-passage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-passage-2",
      "name": "PASSAGE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.5642184412983777,
          "pitch": 0.5257777867211892,
          "rotation": 0,
          "target": "9-stair-landing"
        },
        {
          "yaw": 0.14207930783909362,
          "pitch": 0.33254724747568076,
          "rotation": 0,
          "target": "11-passage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-passage-3",
      "name": "PASSAGE 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.316541507419526,
          "pitch": 0.7737796932455545,
          "rotation": 0,
          "target": "23-bedroom-4"
        },
        {
          "yaw": -1.6182532058716443,
          "pitch": 0.3839157234260693,
          "rotation": 0,
          "target": "10-passage-2"
        },
        {
          "yaw": 0.10464946136915287,
          "pitch": 0.22331968784816603,
          "rotation": 0,
          "target": "12-study-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-study-area-1",
      "name": "STUDY AREA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.18011431329045635,
          "pitch": 0.4283227864707584,
          "rotation": 0,
          "target": "13-study-area-2"
        },
        {
          "yaw": 2.342225262585222,
          "pitch": 0.4806167835655053,
          "rotation": 0,
          "target": "20-bedroom-3"
        },
        {
          "yaw": 2.4920860465339914,
          "pitch": 0.6256629030262708,
          "rotation": 1.5707963267948966,
          "target": "26-bedroom-5"
        },
        {
          "yaw": -1.6141820997803364,
          "pitch": 0.31949734537488084,
          "rotation": 0,
          "target": "11-passage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-study-area-2",
      "name": "STUDY AREA 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.2444520479638221,
          "pitch": 0.5380091635044923,
          "rotation": 0,
          "target": "12-study-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.4999694328447344,
          "pitch": 0.4517729544069251,
          "rotation": 0,
          "target": "15-bedroom-12"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-12",
      "name": "BEDROOM 1.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.19938786785255758,
          "pitch": 0.5995295422665379,
          "rotation": 0,
          "target": "16-bedroom-13"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bedroom-13",
      "name": "BEDROOM 1.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.028859524250364643,
          "pitch": 0.20782227437888778,
          "rotation": 0,
          "target": "6-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.4982597644146374,
          "pitch": 0.533794563975448,
          "rotation": 0,
          "target": "18-bedroom-22"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-22",
      "name": "BEDROOM 2.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.13463584713635868,
          "pitch": 0.6338061596344353,
          "rotation": 0,
          "target": "19-bedroom-23"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-bedroom-23",
      "name": "BEDROOM 2.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7692287520923173,
          "pitch": 0.27816687301886667,
          "rotation": 0,
          "target": "6-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.5610580205287263,
          "pitch": 0.42231648494682794,
          "rotation": 0,
          "target": "21-bedroom-32"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-32",
      "name": "BEDROOM 3.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.6466917628755304,
          "pitch": 0.4705206305823495,
          "rotation": 0,
          "target": "22-bedroom-33"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-33",
      "name": "BEDROOM 3.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.48096406216069454,
          "pitch": 0.3716758591484357,
          "rotation": 0,
          "target": "12-study-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bedroom-4",
      "name": "BEDROOM 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.6295010935366481,
          "pitch": 0.48837401460094476,
          "rotation": 0,
          "target": "24-bedroom-42"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bedroom-42",
      "name": "BEDROOM 4.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.7262758982182547,
          "pitch": 0.4487087304970778,
          "rotation": 0,
          "target": "25-bedroom-43"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bedroom-43",
      "name": "BEDROOM 4.3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.6716663564655612,
          "pitch": 0.40700972433032945,
          "rotation": 0,
          "target": "12-study-area-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-5",
      "name": "BEDROOM 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.6648248242075816,
          "pitch": 0.43802449105620944,
          "rotation": 0,
          "target": "27-bedroom-52"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-bedroom-52",
      "name": "BEDROOM 5.2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.520261864812289,
          "pitch": 0.3694934914458745,
          "rotation": 0,
          "target": "11-passage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-kitchen-1",
      "name": "KITCHEN 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -8.697995212969545e-7,
          "pitch": 0.6043869447915764,
          "rotation": 0,
          "target": "29-kitchen-2"
        },
        {
          "yaw": 1.7081068595739781,
          "pitch": 1.10421254068231,
          "rotation": 1.5707963267948966,
          "target": "6-dining-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-kitchen-2",
      "name": "KITCHEN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.4142347839703753,
          "pitch": 0.5097354908422247,
          "rotation": 0,
          "target": "30-kitchen-3"
        },
        {
          "yaw": 1.7883694371818502,
          "pitch": 0.5189550679613752,
          "rotation": 0,
          "target": "28-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-kitchen-3",
      "name": "KITCHEN 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.5514490996580932,
          "pitch": 0.5246641683397115,
          "rotation": 0,
          "target": "31-kitchen-4"
        },
        {
          "yaw": 1.0061939025483362,
          "pitch": 0.3616721956958404,
          "rotation": 0,
          "target": "29-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-kitchen-4",
      "name": "KITCHEN 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.05767107439699082,
          "pitch": 0.30497655381369526,
          "rotation": 0,
          "target": "28-kitchen-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "SHAHIDA INTERIOR ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
