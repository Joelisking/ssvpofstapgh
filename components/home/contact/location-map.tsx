import React from 'react';

function LocationMap() {
  return (
    <div className="aspect-[4/3] sm:aspect-video rounded-xl overflow-hidden w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127051.18786728402!2d-0.190753!3d5.662475!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c7ceba3a2a9%3A0x199dfe3ae6b99f94!2sSt.%20Thomas%20Aquinas%20Catholic%20Church!5e0!3m2!1sen!2sgh!4v1750640082456!5m2!1sen!2sgh"
        width="100%"
        height="100%"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="St. Thomas Aquinas Catholic Church Location"
      />
    </div>
  );
}

export default LocationMap;
