function fetchSensorData() {
   fetch('https://api.example.com/sensors') //الرابط مثال فقط لل API وليس رابط حقيقي بالحساسات 
      .then(response => response.json())
      .then(data => {
          document.getElementById('temperature').textContent = data.temperature + '°C';
          document.getElementById('humidity').textContent = data.humidity + '%';
          if (data.motion_detected) {
              document.getElementById('motion-sensor').textContent = 'تم اكتشاف حركة';
                    } else {
               document.getElementById('motion-sensor').textContent = 'لا توجد حركة';
                                       }
       })
       .catch(error => {
           console.error('حدث خطأ في جلب البيانات:', error);
       });
}
setInterval(fetchSensorData, 5000);
fetchSensorData()