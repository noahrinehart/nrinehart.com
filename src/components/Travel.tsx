import { useState, useEffect, useCallback } from 'react'
import './Travel.css'

interface TravelTrip {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  folder: string;
  coverImage: string;
  imageCount: number;
}

const travelTrips: TravelTrip[] = [
  {
    id: '00-iceland',
    name: 'Iceland Journey',
    description: 'Epic road trip through glaciers, waterfalls, and volcanic landscapes',
    date: '2022',
    location: 'Iceland',
    folder: '00-iceland',
    coverImage: '32.jpg',
    imageCount: 33
  }
];

function Travel() {
  const [selectedTrip, setSelectedTrip] = useState<TravelTrip | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideshowImageLoading, setSlideshowImageLoading] = useState(false);

  const openSlideshow = (trip: TravelTrip) => {
    setSelectedTrip(trip);
    setCurrentImageIndex(0);
  };

  const closeSlideshow = useCallback(() => {
    setSelectedTrip(null);
    setCurrentImageIndex(0);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedTrip) {
      setSlideshowImageLoading(true);
      setCurrentImageIndex((prev) =>
        prev === selectedTrip.imageCount - 1 ? 0 : prev + 1
      );
    }
  }, [selectedTrip]);

  const prevImage = useCallback(() => {
    if (selectedTrip) {
      setSlideshowImageLoading(true);
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedTrip.imageCount - 1 : prev - 1
      );
    }
  }, [selectedTrip]);

  const handleSlideshowImageLoad = () => {
    setSlideshowImageLoading(false);
  };

  const getImagePath = (folder: string, imageNumber: number) => {
    return `/Pictures/Travel/${folder}/${String(imageNumber + 1).padStart(2, '0')}.jpg`;
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedTrip) return;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          prevImage();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          nextImage();
          break;
        case 'Escape':
          event.preventDefault();
          closeSlideshow();
          break;
        case ' ':
          event.preventDefault();
          nextImage();
          break;
      }
    };

    if (selectedTrip) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedTrip, nextImage, prevImage, closeSlideshow]);

  return (
    <section className="life-events">
      <div className="container">
        <h1>Travel</h1>
        <div className="timeline">
          {travelTrips.map((trip) => (
            <div key={trip.id} className="timeline-item">
              <div className="timeline-date">{trip.date}</div>
              <div className="timeline-content travel-trip">
                <h3>{trip.name}</h3>
                <p className="trip-location">{trip.location}</p>
                <p>{trip.description}</p>
                <div className="trip-preview" onClick={() => openSlideshow(trip)}>
                  <div className="image-container">
                    <img
                      src={`/Pictures/Travel/${trip.folder}/${trip.coverImage}`}
                      alt={`${trip.name} preview`}
                      className="preview-image"
                      loading="lazy"
                      decoding="async"
                      onLoad={(e) => e.currentTarget.classList.add('loaded')}
                    />
                  </div>
                  <div className="preview-overlay">
                    <span>{trip.imageCount} photos</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTrip && (
        <div className="slideshow-modal" onClick={closeSlideshow}>
          <div className="slideshow-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeSlideshow}>&times;</button>
            <button className="nav-btn prev-btn" onClick={prevImage}>&#8249;</button>
            <div className="slideshow-image-container">
              {slideshowImageLoading && <div className="slideshow-loading"></div>}
              <img
                src={getImagePath(selectedTrip.folder, currentImageIndex)}
                alt={`${selectedTrip.name} ${currentImageIndex + 1}`}
                className={`slideshow-image ${slideshowImageLoading ? 'loading' : ''}`}
                onLoad={handleSlideshowImageLoad}
                onLoadStart={() => setSlideshowImageLoading(true)}
              />
            </div>
            <button className="nav-btn next-btn" onClick={nextImage}>&#8250;</button>
            <div className="slideshow-info">
              <h3>{selectedTrip.name}</h3>
              <p>{currentImageIndex + 1} of {selectedTrip.imageCount}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Travel