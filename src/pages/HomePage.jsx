import React from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    }

    return (
        <> {/* React.Fragment kullanarak birden fazla ana eleman dönebiliriz */}
            <div className="home-banner">
                <div className="home-logo">
                    <img src="/images/iteration-1-images/logo.svg" alt="Logo" />
                    <p>KOD ACIKTIRIR <br /> PİZZA, DOYURUR</p>
                </div>
                <div className="button-wrapper">
                    <button className="aciktimButon" onClick={handleClick}>ACIKTIM</button>
                </div>
            </div>

            {/* Yeni eklenen alt menü - Artık home-banner dışında */}
            <div className="bottom-nav">
                <div className="nav-item">
                    <img src="/images/iteration-2-images/icons/1.svg" alt="Yeni! Kore" />
                    <span>YENİ! Kore</span>
                </div>
                <div className="nav-item">
                    <img src="/images/iteration-2-images/icons/2.svg" alt="Pizza" />
                    <span>Pizza</span>
                </div>
                <div className="nav-item">
                    <img src="/images/iteration-2-images/icons/3.svg" alt="Burger" />
                    <span>Burger</span>
                </div>
                <div className="nav-item">
                    <img src="/images/iteration-2-images/icons/4.svg" alt="Kızartmalar" />
                    <span>Kızartmalar</span>
                </div>
                <div className="nav-item">
                    <img src="/images/iteration-2-images/icons/5.svg" alt="Fast food" />
                    <span>Fast food</span>
                </div>
                <div className="nav-item">
                    <img src="/images/iteration-2-images/icons/6.svg" alt="Gazlı içecek" />
                    <span>Gazlı içecek</span>
                </div>
            </div>

            {/* Kırmızı çerçeveli kartlar bölümü - Artık home-banner dışında */}
            <div className="cards-section">
                <div className="card large-card">
                    <img src="/images/iteration-2-images/cta/kart-1.png" alt="Özel Lezzetus" className="card-image" />
                    <div className="card-content">
                        <h3>Özel Lezzetus</h3>
                        <p>Position: Absolute Ac: Burger.</p>
                        <button className="siparis-ver-button">SİPARİŞ VER</button>
                    </div>
                </div>

                <div className="card-column">
                    <div className="card small-card top-small-card">
                        <div className="card-content">
                            <h3>Hackathon <br /> Burger Menüsü</h3>
                            <button className="siparis-ver-button">SİPARİŞ VER</button>
                        </div>
                        <img src="/images/iteration-2-images/cta/kart-2.png" alt="Hackathon Burger Menüsü" className="card-image" />
                    </div>
                    <div className="card small-card bottom-small-card">
                        <div className="card-content">
                            <h3>Çoooooook hızlı <br /> npm gibi kurye</h3>
                            <button className="siparis-ver-button">SİPARİŞ VER</button>
                        </div>
                        <img src="/images/iteration-2-images/cta/kart-3.png" alt="npm gibi kurye" className="card-image" />
                    </div>
                </div>
            </div>

            {/* "En çok paketlenen menüler" bölümü */}
            <div className="most-popular-section">
                <h2 className="section-title">En çok paketlenen menüler</h2>
                <h1 className="section-slogan">Acıktıran Kodlara Doyuran Lezzetler</h1>

                <div className="popular-categories">
                    <button className="category-button active">Ramen</button>
                    <button className="category-button">Pizza</button>
                    <button className="category-button">Burger</button>
                    <button className="category-button">Kızartmalar</button>
                    <button className="category-button">Fast food</button>
                    <button className="category-button">Gazlı içecek</button>
                </div>

                <div className="menu-cards-wrapper">
                    {/* İlk Menü Kartı */}
                    <div className="menu-card">
                        <img src="/images/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza" className="menu-image" />
                        <div className="menu-details">
                            <h4>Terminal Pizza</h4>
                            <p>4.9 <span className="rating-count">(200)</span></p>
                            <p className="price">85.50₺</p>
                        </div>
                    </div>

                    {/* İkinci Menü Kartı */}
                    <div className="menu-card">
                        <img src="/images/iteration-2-images/pictures/food-2.png" alt="Vefasız Pizza" className="menu-image" />
                        <div className="menu-details">
                            <h4>Vefasız Pizza</h4>
                            <p>4.9 <span className="rating-count">(200)</span></p>
                            <p className="price">85.50₺</p>
                        </div>
                    </div>

                    {/* Üçüncü Menü Kartı */}
                    <div className="menu-card">
                        <img src="/images/iteration-2-images/pictures/food-3.png" alt="Kodomoto Burger" className="menu-image" />
                        <div className="menu-details">
                            <h4>Kodomoto Burger</h4>
                            <p>4.9 <span className="rating-count">(200)</span></p>
                            <p className="price">85.50₺</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Yeni eklenen Footer bölümü */}
            <footer className="main-footer">
                <div className="footer-content-wrapper">
                    <div className="footer-column company-info">
                        <h2>Teknolojik Yemekler</h2>
                        <ul>
                            <li>
                                <img src="/images/iteration-2-images/footer/icons/icon-1.png" alt="Location Icon" />
                                341 Londonderry Road<br />
                                İstanbul Türkiye
                            </li>
                            <li>
                                <img src="/images/iteration-2-images/footer/icons/icon-2.png" alt="Email Icon" />
                                aciktim@teknolojikyemekler.com
                            </li>
                            <li>
                                <img src="/images/iteration-2-images/footer/icons/icon-3.png" alt="Phone Icon" />
                                +90 216 123 45 67
                            </li>
                        </ul>
                    </div>

                    <div className="footer-column hot-menu">
                        <h3>Hot Menu</h3>
                        <ul>
                            <li>Terminal Pizza</li>
                            <li>5 Kişilik Hackathlon Pizza</li>
                            <li>useEffect Tavuklu Pizza</li>
                            <li>Beyaz Console Frosty</li>
                            <li>Testler Geçti Mutlu Burger</li>
                            <li>Position Absolute Acı Burger</li>
                        </ul>
                    </div>

                    <div className="footer-column instagram-feed">
                        <h3>Instagram</h3>
                        <div className="instagram-images">
                            <img src="/images/iteration-2-images/footer/insta/li-0.png" alt="Instagram Post 1" />
                            <img src="/images/iteration-2-images/footer/insta/li-1.png" alt="Instagram Post 2" />
                            <img src="/images/iteration-2-images/footer/insta/li-2.png" alt="Instagram Post 3" />
                            <img src="/images/iteration-2-images/footer/insta/li-3.png" alt="Instagram Post 4" />
                            <img src="/images/iteration-2-images/footer/insta/li-4.png" alt="Instagram Post 5" />
                            <img src="/images/iteration-2-images/footer/insta/li-5.png" alt="Instagram Post 6" />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    © 2023 Teknolojik Yemekler.
                </div>
            </footer>
        </>
    );
}