import React from 'react'

function charchMarkers() {
  return (
    {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2599882,
                        -38.7170967,
                        0
                    ]
                },
                "properties": {
                    "name": "Oficina Municipal de Cultos\n",
                    "styleUrl": "#icon-ci-1",
                    "styleHash": "-6e38cf9c",
                    "styleMapHash": {
                        "normal": "#icon-ci-1-normal",
                        "highlight": "#icon-ci-1-highlight"
                    },
                    "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAABcCAYAAAA743ZSAAAH1klEQVR42u1bCYwTVRheRMUbbxTWbTu7gEpUDN4nxiPigdCZJ4dyKAEPiEZFRQ2yBhEiHhHxqNt5b3cFlMV4JF4YD4x4oChqVFDkUMSIAkJEkbP+3z9voHTb7iy0022dSb60nU7fm6/z3vdf75WVBUdwZD3CfVXYsOznDGGfVZIEjag6OWLJdYaQN5QmQdM+iQiuiQg5oiQJVorabkRwtWGpGwOCAcGAYEAwIBgQDAgGBAOCAcGAYEDQ+xHqU3MMEzTVtaUZD9KTI4IbIpb9TPvLY/uUELVEKwpy7yFyfxMSQNiS0zr0rjukJOiFTTnIeXJMbiNhs/NeTS6rrt6tBMQlXsUC09s+wQV/NuuO7yIa9iwLjhZ+kKhchExaxFRDt8MeTvPSKgmxIYKjac5tJWxJAubj9DLR0LoEREYdTWT+cRVUgwjbA0vD/pmqIxHalEIwERFqQGkQFPUVROgjwjzCFzT3vqTXuUT8ktJQGbJ14V7qwIr+Uw9KRrdhsT0CCS4GgQkLdTO5ZncYpryPYdnVhlC34lwkGj+nyE2EHNtIXHYQGnt2F/HEfkVJDs40PaUPsxJkc6HOLlL1jF/aBDknsjDV+GKdf70MYb9EJGZkA10zCiFV0RFEpADAHADdu1fvngz3fFWPSW0COS70gSehzcEjNOwm7gBTPUivDyFVQd6LAigIflKfn5gCXDeOzEeohZkDdbcXQfEO9Sq8n5ZBTqgL6ab+zS1BmTAseVfByVUJeRgNy29yTU5jXUjYp7eAWM8eDfeLiD5A7yfRjT22KzAs9ajTppxQackzAoXL7wEDrYEUYC5RaOOPpVkk91OBiCmfpyH1ei5Aw/MNGqqvkJJOQdsUgfQrkHrKEXkSl1TMKIzAWGqMTwRn+c9ONLQm1ZQ+EVzUuae9v+95Fpovl1HnI9lFM+VN/CrkvexqmfL+nQWiC7c9mn+3UFA8pN2A+n0DQc/HMEXYw9lpQrlo2LtcxA9OzZ4hskfqEN/x3B2s9sLnyt71h6fLtuEcZ9x0uwXJflcIeSwNz09IST8lOZ/DQL7TtL+n8wu2wfm8FFFCVbSm3I0TSaD6Or/l7xakYD7hM6ddeqXrDKH6+2wi7J6enWYKjxonlhKtiPyVzXDSJ/pLENUhbzf2dad+sUMzmxqOH72086zfTvZ4TwklS92ZrR1EC3TdXx7aesvXajBEgm6+O2p/HA+mQp/P9vQ43OoxqQ2Svxnb0W1hzgeqnksjj00eTu09XkUGuStq7smIiPgpOO+lgkuC1RmOe2ob2IaAtTXoo6pPbSXMkD/zj8ih/EXexo8AvV9GWL4j1K+QeC9Di65r0NcvbwRTLtF9LPSt3IZUe9qCZmP8UGFKwwPBGZ6UlJTbJxMhr/Zk/4T8HN5Kk4Jlyac9JqEm+GXkhyQNzd8JK9JgDd3Qi3DLmlZkexRd/0eGdlbo4bvMqWH4EOXDV8Q8xMRngehT1ykVmHvloq6DJ7eP/M9M7TBM1RF9IYNXlDWMFhdBQP5h5LEPEIChpnMXhyy7hwuUzvDPex0RUMjk33MbVu35ldHaM9EHxZnnhqPqNC9DfpcOiIZeMYGVg2t5u5zjam3Ri31cQBjGemrTWSibSPn9Vu2Ir9H9oI+VWN+WV4K8qNWUP+fCD90mMjTPkMX21CaNFD/qEJu9EZTXeRqiQh1B16/yZAvzvbkSc49u/B3q7AMOWNOBg1R7tmHKC7y0iXwL/eZlN7hN2x6mhVDvwwbnlSBXZK+acgDSD/jn0yEUjR2JudqctaBoD7/L1CaiEjZP+RaZkq9D8EZjIS3DUtHtkNeETft6zLlcgvoZRl6McPtBv9AATnTl40BehYLPt31K9mbCWq8eUrMPNMyrBQtLcFPIjJ+Yz1ThqgIThPm5In+BrqniNA9e4BKXkG/6BkvN5OjEktPgtgV6GBzpfEbyTLgmiCpQDhYbNA9qMiJ6VK+czV25jgspTIqYdn2hBUZjac49Gk7Q8mTP2vF6wp86I7aUnvR3zkJ0+ysu1FjyPVRrNebq8/N0geYnwm86NGqqXrE857bQMfJ8g/NpmLzmVHdR6LSHo1KEABVrWrAvCWtneCtBNB46qq/dHlUl+KbJJTL4nTiP70OiJuKmOWDjkLVziqv2QMJtKLzwQgf0b8olyM/Ao8p5shc3aYhY28JsqEq0wijCn4P8DO4j712iQ3j5eAKItPEEWYhM1Yu31LEvKUci8KXw6XZnwZ49jsvc9BnnsTAdfiz8WdfXRIoCT5JHQb+adnnf38RhilBdMWzYCcbQtGQtVgRy3GfJb/W8W5eUrtgVrOd0Ic9NLq7OhIHn5ZcU8MLx5vwMhVE7UTWKtXX29qmhTu2OF+XM1wLgtVi5SedSkNNc7EAudETFBaq/PJ8W6bzn6ma2v9JpU84iwk9hwQJn3OmJZ4vWx+iS8sYMDW9wGlaL9Wr66XSTj/OqCGEPRiaN6300XDmPSSLiigr+OKeG7wBRPAfNNDogOBjmEBka2qdimCNyx94KXiBL5skQ8l2ttivSbPRysVk/iNq0ZTst1e7FyDTPg2JSww9jgzGnAoU6zpcJnkHJnUQw/QHIrvPqRi7czKFp8ksyUQzhdEWVKTyXhPyY/sEYNjWGovZ5eBJIU7SU7agIeEGWVd1ZLzeIHwKeMt0/RhdGxP/O1fwPlHef0CgV0lIAAAAASUVORK5CYII=",
                    "description": "Lamadrid 237 - Tel: +54 291 455-0336"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.23687,
                        -38.7338929,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica del Río de la Plata",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Castelar 2267"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2613454,
                        -38.7231383,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Valdense de Bahía Blanca",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Villarino 30"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2596073,
                        -38.7162973,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica Metodista Central\n",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Belgrano 355"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2612274,
                        -38.7208511,
                        0
                    ]
                },
                "properties": {
                    "name": "Asociación Israelita de Bahía Blanca (AMIA-DAIA) ",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Lavalle 56"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.266219,
                        -38.7163496,
                        0
                    ]
                },
                "properties": {
                    "name": "Catedral Nuestra Señora de la Merced",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Sarmiento 72"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2791848,
                        -38.7105837,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia de Jesucristo de los Santos de los Últimos Días",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Vicente López 1088"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2598273,
                        -38.7287526,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Nueva Apostólica",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Ingeniero Luiggi 239"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2203827,
                        -38.7293384,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Israelita del Nuevo Pacto",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Juan Bautista Baigorria 2765"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2676459,
                        -38.7247622,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Adventista del 7mo. día",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Fitz Roy 356"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2587624,
                        -38.7197838,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Bautista Pueblo Nuevo ",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Soler 444"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2792304,
                        -38.7239419,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Anglicana",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Gorriti 818"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2775352,
                        -38.7171135,
                        0
                    ]
                },
                "properties": {
                    "name": "Paz, Amor y Elevación - Templo Espiritista\n",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "PATRICIOS 336"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.282897,
                        -38.7057447,
                        0
                    ]
                },
                "properties": {
                    "name": "Asé da Onsalá",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Estomba 1439"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2590414,
                        -38.7265597,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Presbiteriana Galilea",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "25 de Mayo 88"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2767144,
                        -38.7249379,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Ejército de Salvación",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Moreno 759"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2739625,
                        -38.7013992,
                        0
                    ]
                },
                "properties": {
                    "name": "Unión Asambleas de Dios",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Panamá 1269"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2428274,
                        -38.7113958,
                        0
                    ]
                },
                "properties": {
                    "name": "Unión Pentecostal",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Rufino Rojas 665"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2907424,
                        -38.6980583,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Wesleyana",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Ayacucho 2329"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2478914,
                        -38.7372766,
                        0
                    ]
                },
                "properties": {
                    "name": "Misión Internacional",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Saavedra 1932"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3189753,
                        -38.7190723,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Voz en el Desierto",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Sargento Mayor Iturra 2306"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2829854,
                        -38.7206586,
                        0
                    ]
                },
                "properties": {
                    "name": "Aguilas Reales",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Almafuerte 643"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3042446,
                        -38.693256,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia de Dios",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Vieytes y Suiza"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2700679,
                        -38.7090056,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Asamblea de Dios\n",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Alvarado 725"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2927004,
                        -38.7076577,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Biblia Abierta",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Inglaterra 450"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2248513,
                        -38.7417161,
                        0
                    ]
                },
                "properties": {
                    "name": "Ministerio de Intercesión el Poderoso de Israel",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Patagones 578"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2711247,
                        -38.7255008,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Cristiana Evangélica",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Donado 533"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2656262,
                        -38.7326256,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Luterana",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Santa Fe 859"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2648054,
                        -38.7060586,
                        0
                    ]
                },
                "properties": {
                    "name": "Asociación Testigos de Jehová",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Paraguay 573"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2937787,
                        -38.6915896,
                        0
                    ]
                },
                "properties": {
                    "name": "Misión Iglesia del Señor",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "El Resero 311"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3051888,
                        -38.7185114,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Cuadrangular",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Jujuy 1735"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2754592,
                        -38.7540247,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Pentecostal Unida",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Coronel Vidal 1664"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.236889,
                        -38.7476699,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica Pentecostés Internacional",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "James Harris 335"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2311705,
                        -38.7493182,
                        0
                    ]
                },
                "properties": {
                    "name": "Centro Cristiano Por y Para la Familia",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Brown 2440"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2503376,
                        -38.735402,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Pentecostal “Cristo el Rey”",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Estados Unidos 203"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2422749,
                        -38.7418291,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Pentecostal del Nombre de Jesucristo",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Saavedra 2459"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2198355,
                        -38.7444483,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Fe, Sanidad y Liberación",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "San José 650"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2295827,
                        -38.7472431,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica San Pablo",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Magallanes 11"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2146374,
                        -38.7402517,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica Pentecostal Apostólica",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "San José 1042"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2318947,
                        -38.740168,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia del Señor “Shalom”",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Rivadavia 2800"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.1933085,
                        -38.7178711,
                        0
                    ]
                },
                "properties": {
                    "name": "Ministerio Pentecostés Removiendo las Aguas",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Salinas Chicas 3812"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2404563,
                        -38.7401157,
                        0
                    ]
                },
                "properties": {
                    "name": "Misión Evangélica Argentina para Cristo",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Luis María Drago 2434"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3072809,
                        -38.6909909,
                        0
                    ]
                },
                "properties": {
                    "name": "Cehmec",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Vieytes 3660"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3036358,
                        -38.704428,
                        0
                    ]
                },
                "properties": {
                    "name": "Asociación Evangélica La Red",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Nicolás Perez 750"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2912306,
                        -38.6873522,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Cristiana Aliancista",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Panamá 3061"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3022115,
                        -38.7004991,
                        0
                    ]
                },
                "properties": {
                    "name": "Congregación Cristiana Engadi",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "2da. Terrada 2765"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3060846,
                        -38.7010936,
                        0
                    ]
                },
                "properties": {
                    "name": "Congregación Jesús es el Camino",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Ricardo Guiraldes 653"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2933093,
                        -38.6782798,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Cristo con Vosotros",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Witcomb 3747"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2855818,
                        -38.6978364,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Pentescostal Internacional la Luz del Mundo",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Alvarado 2121"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2075778,
                        -38.7014578,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Arca de Noe",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Rafaél Augusto Bullrich 1838"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2373825,
                        -38.7452767,
                        0
                    ]
                },
                "properties": {
                    "name": "Centro Cristiano Camino con Dios",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "La Pinta 190"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2258329,
                        -38.7297988,
                        0
                    ]
                },
                "properties": {
                    "name": "Movimiento Cristiano y Misionero",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Humboldt 2543"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2436374,
                        -38.7393688,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Pentecostés Libertad Espíritu Santo",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Brown 2245"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.256909,
                        -38.7103451,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica La Roca",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Hipólito Irigoyen 749"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2657281,
                        -38.7228391,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Visión de Dios",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Fitz Roy 151"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2590977,
                        -38.7177162,
                        0
                    ]
                },
                "properties": {
                    "name": "Asamblea de Dios Recta Final",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Las Heras 300"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2356552,
                        -38.7315982,
                        0
                    ]
                },
                "properties": {
                    "name": "Comunidad Cristiana Luz de Cristo",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Sócrates 2170"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.257778,
                        -38.7095456,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica el Nazareno",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Sarmiento 867"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3001167,
                        -38.7141291,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica El Sinaí",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Avellaneda 1800"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2432137,
                        -38.70996,
                        0
                    ]
                },
                "properties": {
                    "name": "Congregación Cristiana Pueblo Escogido",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Rawson 571"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3130476,
                        -38.6868078,
                        0
                    ]
                },
                "properties": {
                    "name": "UAD - Pasión por su Presencia",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Vieytes 4200"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2317928,
                        -38.7427119,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia el Río de Dios",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Caseros 3025"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2869229,
                        -38.7014452,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Arca del Pacto",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Alberti 25"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2422642,
                        -38.7095393,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Pentecostal “Mahanaim”",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Charcas y Fortaleza Protectora Argentina"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2633383,
                        -38.7235736,
                        0
                    ]
                },
                "properties": {
                    "name": "Centro Ágape Cristiano",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Brown 444"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2372967,
                        -38.7399839,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Pentecostal del Nuevo Pacto",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Maipú y Cacique Venancio"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2653311,
                        -38.7457579,
                        0
                    ]
                },
                "properties": {
                    "name": "Misión Iglesia del Señor",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Luis Piedra Buena 1459"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2466737,
                        -38.7400173,
                        0
                    ]
                },
                "properties": {
                    "name": "Templo Restaurador",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Venezuela 283"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2801289,
                        -38.7049974,
                        0
                    ]
                },
                "properties": {
                    "name": "Centro Cristiano Familiar Peniel",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Zelarrayán 1370"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.1763515,
                        -38.7531671,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Peniel del Sur",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Schiaffini 1345"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.396577,
                        -38.7162073,
                        0
                    ]
                },
                "properties": {
                    "name": "Unión Pentecostal",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "28 de Septiembre 45 (General Daniel Cerri)"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2154796,
                        -38.6843289,
                        0
                    ]
                },
                "properties": {
                    "name": "UAD - Iglesia Cristo Vive",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Salliquelló 590"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2144389,
                        -38.6802355,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica Misionera Puerta del Cielo",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "El Boyero y Las Heras"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2721091,
                        -38.7159164,
                        0
                    ]
                },
                "properties": {
                    "name": "Primera Iglesia Bautista",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Roca 73"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2292769,
                        -38.7469502,
                        0
                    ]
                },
                "properties": {
                    "name": "Iglesia Evangélica Pentecostal Argentina",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Salinas Chicas 36"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2606051,
                        -38.7500901,
                        0
                    ]
                },
                "properties": {
                    "name": "Asociación Iglesia Evangélica Misionera",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Venezuela 1520"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.3009884,
                        -38.7282462,
                        0
                    ]
                },
                "properties": {
                    "name": "AITEM",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Charlone 2080"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2346306,
                        -38.7361259,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia San Francisco de Asís",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Agrimensor Ambrosio Cramer 450"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2447318,
                        -38.726861,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia San José",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Avda Garibaldi 560"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2646713,
                        -38.7053888,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia Nuestra Señora de Lourdes",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "12 de Octubre 742"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2845197,
                        -38.7188254,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia Nuestra Señora de Luján",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Juan Molina 751"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2562894,
                        -38.7123899,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia San Luis Gonzaga",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Espora 140"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.272557,
                        -38.7105209,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia Inmaculado Corazón de María",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Zelarrayán 741"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2322273,
                        -38.7202337,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia Nuestra Señora del Carmen",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Juan Bautista Baigorria 1645"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2730559,
                        -38.7374189,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia Nuestra Señora del Rosario de Pompeya",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Teniente Farías 792"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2624719,
                        -38.7543175,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia San Antonio de Papua",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Saenz Peña 2241"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2843078,
                        -38.7273046,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia San Juan Bosco",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Gorriti 1251"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2852707,
                        -38.7069335,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia San Roque",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Vieytes 1497"
                }
            },
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -62.2667956,
                        -38.727336,
                        0
                    ]
                },
                "properties": {
                    "name": "Parroquia Sta. Teresita del Niño Jesús",
                    "styleUrl": "#icon-1317",
                    "styleHash": "-1760085a",
                    "styleMapHash": {
                        "normal": "#icon-1317-normal",
                        "highlight": "#icon-1317-highlight"
                    },
                    "icon": "http://www.gstatic.com/mapspro/images/stock/1317-poi-religious-generic.png",
                    "description": "Villarino 460"
                }
            }
        ]
    }
  )
}

export default charchMarkers