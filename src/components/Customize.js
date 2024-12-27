
import React, { useState } from 'react';
import '../App.css';

const watchData = {
  models: {
    'Series 10': {
      model: 'APPLE WATCH SERIES 10',
      basePrice: 399, 
  sizes: ['42mm', '46mm'],
  cases: ['Aluminum', 'Titanium'],
  
  bands: [
    { name: 'Stainless Steel', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 99 },
    { name: 'Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs', price: 49 },
    { name: 'Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'FineWoven', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 79 },
    { name: 'Braided Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc', price: 99 },
    { name: 'Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Yk9SM2Y3YXpqSmgvQXZWL1c2b2kzanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'Nike Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FFaUFPN0pnRW1jekVybkRsS0xBWVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM', price: 49 },
    { name: 'Nike Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZTZYcUxpNFhjd3V2dlVEdUFIclpCanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk', price: 49 },
  ],
  images: {
    '42mm': 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
    '46mm': 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
    Aluminum: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B', // Add case images
    Titanium: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
  },
    },
    'Series 10 Pro': {
      model: 'APPLE WATCH SERIES 10 PRO',
      basePrice: 599, 
  sizes: ['42mm', '46mm'],
  cases: ['Aluminum', 'Titanium'],
  
  bands: [
    { name: 'Stainless Steel', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 99 },
    { name: 'Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs', price: 49 },
    { name: 'Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'FineWoven', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 79 },
    { name: 'Braided Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc', price: 99 },
    { name: 'Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Yk9SM2Y3YXpqSmgvQXZWL1c2b2kzanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'Nike Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FFaUFPN0pnRW1jekVybkRsS0xBWVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM', price: 49 },
    { name: 'Nike Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZTZYcUxpNFhjd3V2dlVEdUFIclpCanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk', price: 49 },
  ],
  images: {
    '42mm': 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
    '46mm': 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
    Aluminum: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B', // Add case images
    Titanium: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
  },
    },
    'Series 10 Pro Max': {
      model: 'APPLE WATCH SERIES 10 PRO MAX',
      basePrice: 699, 
  sizes: ['42mm', '46mm'],
  cases: ['Aluminum', 'Titanium'],
  
  bands: [
    { name: 'Stainless Steel', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC7J4ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=dEtVZDJwdGdSUTNydjBzY0ltbTBpRHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 99 },
    { name: 'Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL73_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZDltL2RrNFBVSStNSERYSUpVdENCSVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZXYwbmJMVDNlZjZ6NkQzeENZVHZXVHVYTHYyU1puMGYwMkRSY3hDYkZoWWs', price: 49 },
    { name: 'Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXLQ3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=SUJyaDZZRFhzbEdXcWNtc2VCd0kwVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'FineWoven', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXWY3ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=cENDQStWaTl2LytFZ0J1Z08zeVNPanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 79 },
    { name: 'Braided Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY373ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=azQvbVNwVzRJcWRlblRnV01DRGIrVHVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHo3dVZ6ekhOOGpwOW00bzV1Ni8rVGc', price: 99 },
    { name: 'Solo Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MY803ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Yk9SM2Y3YXpqSmgvQXZWL1c2b2kzanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRDVzaDNYQm9FT2pIMkdXYzlEUEliVWM', price: 49 },
    { name: 'Nike Sport Loop', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJD3_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FFaUFPN0pnRW1jekVybkRsS0xBWVdnZjZ2K1V2TGlxZXZKd1RDUkRXMXlpUXRnQm9OYUp6MTBYbDhnVTM5ZUZZZmZjMXh6Uldia3Q2UDlKOHJtUHhSTlBxb29zVTkraVhnZjRZNVkrWXM', price: 49 },
    { name: 'Nike Sport Band', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXU73ref_SR_S10_VW_PF?wid=1000&hei=1000&fmt=p-jpg&qlt=95&.v=ZTZYcUxpNFhjd3V2dlVEdUFIclpCanVkcStXUmxwTmtpV2dxUWV1ZU5xeXkvYVhHUzZnbTdlRlQ4aGhRUUYyVXZ6RVMwQXJHUjF3MlcvZ3RFeXhMRHlGQWdsRTZ5b1NPWGg0L2sxL1grWFk', price: 49 },
  ],
  images: {
    '42mm': 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-42-aluminum-jetblack-nc-s10_VW_PF+watch-face-42-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=Tmx5N2FJN2lxM3QwMWlJbWNYWU5zcUVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFejM0dWNRQ25LYnpVd3RzVVhGSlBDMS9ZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
    '46mm': 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-jetblack-nc-s10_VW_PF+watch-face-46-aluminum-jetblack-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3NkVmS05vWHBxQ1hNMzNlZ1l5V3RQRm0xR2lBNEhDZ3RrRjNEOTloOGpFekM4bU8yL1REVmF4VUkrMW5QRGtKeWZZdXM3S3c2TnF5czBINnVYaTd4cVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
    Aluminum: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-aluminum-silver-nc-s10_VW_PF+watch-face-46-aluminum-silver-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=ZkpvU2VZQXB3RnNRVENEZS9Wb2Y3Ni9MMjFrdVpVbER4UTlYL0F6UUxMTXlKN3h2cmJhZy9Wa2xIdm9lcGFpb09vMDVrRDBTL1JGOWgwenZrMUlPenphRldCVytibDdFVW4zaGQraXo4V2lGb0grci9sTHk0cW5yeWNFd2tRMXRGdEhRVmRIZVBLS2FtUFNyZG1CeE40OVlNTUpXNVJHaTMrakMzTkw0cUFRY2xKemp2MTFPaUhOWjNINUFjT21B', // Add case images
    Titanium: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-case-46-titanium-natural-cell-s10_VW_PF+watch-face-46-titanium-natural-s10_VW_PF?wid=1000&hei=1000&fmt=png-alpha&.v=VkZ1UEhBSWJYcW8vU2JKY0dsSEFqdVRaQzNERGRFYWpOR2ZYa2tEblo3UFZicVRRN09oTDNPbVJoakNOdFBsL3NqLzlHdDZiZk5mQ3ZsSjZIUUJtOVQzcnNWTHRlNVlONzMza21GaTAwQVVFV3ZkVVErQ2lxQjUvY3lWaGtLb0N0ellxUDB4dVliN1NPTHhYUld4M0p5am05N0NVWnlUTTNBaW9WT3lDS2lvbmYzRTFGU1cyNFdtdUoxcXBXVFAv',
  },
    },
  },
};

const Customize = () => {
  const [selectedModel, setSelectedModel] = useState('Series 10');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedCase, setSelectedCase] = useState('');
  const [selectedBand, setSelectedBand] = useState('');
  const [currentSlide, setCurrentSlide] = useState(2);
  const [sliderImages, setSliderImages] = useState([]);
  const [currentSelection, setCurrentSelection] = useState('');

  const currentModel = watchData.models[selectedModel];

  const handleButtonClick = (type) => {
    const modelData = watchData.models[selectedModel];
    let images = [];
    setCurrentSelection(type);

    if (type === 'Size') {
      images = modelData.sizes.map((size) => modelData.images[size]);
    } else if (type === 'Case') {
      images = modelData.cases.map((caseType) => modelData.images[caseType]);
    } else if (type === 'Band') {
      images = modelData.bands.map((band) => band.image);
    }

    setSliderImages(images);
    setCurrentSlide(0); // Reset to the first slide
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setSelectedSize('');
    setSelectedCase('');
    setSelectedBand('');
    setCurrentSlide(0); // Reset slider on model change
  };

  const handleSlideChange = (direction) => {
    if (direction === 'prev') {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    } else if (direction === 'next') {
      setCurrentSlide((prev) => Math.min(prev + 1, sliderImages.length - 1));
    }
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
    const image = watchData.models[selectedModel].images[size];
    const otherImage = watchData.models[selectedModel].sizes
      .filter((s) => s !== size)
      .map((s) => watchData.models[selectedModel].images[s]);

    setSliderImages([image, ...otherImage]);
    setCurrentSlide(0);
  };

  const handleCaseSelection = (caseType) => {
    setSelectedCase(caseType);
    const image = watchData.models[selectedModel].images[caseType];
    const otherImage = watchData.models[selectedModel].cases
      .filter((c) => c !== caseType)
      .map((c) => watchData.models[selectedModel].images[c]);

    setSliderImages([image, ...otherImage]);
    setCurrentSlide(0);
  };

  const handleBandSelection = (bandName) => {
    setSelectedBand(bandName);
    const band = watchData.models[selectedModel].bands.find((b) => b.name === bandName);
    const otherBands = watchData.models[selectedModel].bands
      .filter((b) => b.name !== bandName)
      .map((b) => b.image);

    setSliderImages([band.image, ...otherBands]);
    setCurrentSlide(0);
  };

  const renderSliderImages = () => {
    if (sliderImages.length === 0) return [];

    const totalImages = sliderImages.length;
    const visibleImages = Math.min(5, totalImages);
    const start = Math.max(0, currentSlide - Math.floor(visibleImages / 2));
    const end = Math.min(totalImages, start + visibleImages);

    const centeredImages = sliderImages.slice(start, end);

    return centeredImages.map((image, index) => {
      const isCenter = start + index === currentSlide;
      return (
        <img
          key={index}
          className={`image-dimensions ${isCenter ? 'highlight' : ''}`}
          style={{
            order: isCenter ? '0' : '',
            transform: isCenter ? 'scale(1.2)' : '',
          }}
          src={image}
          alt={`${currentSelection} option ${start + index + 1}`}
        />
      );
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{currentModel.model}</h1>

        {/* Dropdown for Model Selection */}
        <label>
          Select Model:
          <select value={selectedModel} onChange={handleModelChange}>
            {Object.keys(watchData.models).map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </label>

        <div className="buttons">
          <button onClick={() => handleButtonClick('Size')}>Size</button>
          <button onClick={() => handleButtonClick('Case')}>Case</button>
          <button onClick={() => handleButtonClick('Band')}>Band</button>
        </div>

        <div className="slider">
          {sliderImages.length > 0 ? (
            <div>
            <div className="slider-container">
              <button className="slider-button" style={{ alignSelf: 'center' }} onClick={() => handleSlideChange('prev')}>
                &#9664;
              </button>

              <div className="slider-images" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {renderSliderImages()}
              </div>

              <button className="slider-button" style={{ alignSelf: 'center' }} onClick={() => handleSlideChange('next')}>
                &#9654;
              </button>
              </div>
              <div className='selected-options'>

              {/* Selection options based on category */}
              {currentSelection === 'Size' && (
                watchData.models[selectedModel].sizes.map((size, index) => (
                  <button key={index} className='selected-options' onClick={() => handleSizeSelection(size)}>
                    {size}
                  </button>
                ))
              )}
              {currentSelection === 'Case' && (
                watchData.models[selectedModel].cases.map((caseType, index) => (
                  <button key={index}  onClick={() => handleCaseSelection(caseType)}>
                    {caseType}
                  </button>
                ))
              )}
              {currentSelection === 'Band' && (
                watchData.models[selectedModel].bands.map((band, index) => (
                  <button key={index} className='selected-options' onClick={() => handleBandSelection(band.name)}>
                    {band.name}
                  </button>
                ))
              )}
            </div>
            </div>
          ) : (
            <p>Select a category to see images</p>
          )}
        </div>

        {/* Display Selection */}
        <div>
          <h2>Your Selection:</h2>
          <p>Size: {selectedSize}</p>
          <p>Case: {selectedCase}</p>
          <p>Band: {selectedBand}</p>
          <p>
            Total Price: $
            {currentModel.basePrice +
              (currentModel.bands.find((band) => band.name === selectedBand)?.price || 0)}
          </p>
        </div>
      </header>
    </div>
  );
};

export default Customize;



