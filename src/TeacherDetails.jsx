import React from 'react';
import { useParams } from 'react-router-dom';

const TeacherDetails = () => {
  const { id } = useParams(); // URL'den öğretmenin ID'sini al
  // Bu ID'ye göre öğretmen bilgilerini fetch edip görüntüleyebilirsiniz.

  return (
    <div>
      <h1>Öğretmen Detayları</h1>
      <p>Öğretmenin ID'si: {id}</p>
      {/* Burada öğretmenin detaylarını gösterin */}
    </div>
  );
};

export default TeacherDetails;
