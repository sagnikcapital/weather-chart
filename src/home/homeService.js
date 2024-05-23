import { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


/**
 * Return Latitude and Longitude
 */
export const fetchLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        
        return {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }
      },
      (error) => {
        console.error("Error fetching geolocation: ", error);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

/**
 * Generate PDF
 */
export const generatePdf = () => {

}


