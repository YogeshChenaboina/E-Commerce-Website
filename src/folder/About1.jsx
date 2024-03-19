import React from 'react'
import styles from './aboutCss.module.css'
const About1 = () => {

  return (
    <div className={styles.main}>
      <div className={styles.box1}>
      <h3>About Us</h3>
            <p>Welcome to our e-commerce store! We strive to provide high-quality products and exceptional customer service.</p>
            <p>Our mission is to make online shopping easy and enjoyable for our customers. With a wide range of products and fast delivery, we aim to exceed your expectations.</p>
            <p>Feel free to browse our store and discover the latest trends in fashion, electronics, home goods, and more.</p>
            <p>Thank you for choosing us for your online shopping needs!</p>
      <h3>Need Help?</h3>
            <p>If you have any questions or need assistance, please feel free to reach out to our customer support team.</p>
            <ul>
                <li>Email: apnasupport@example.com</li>
                <li>Phone: 1-800-123-4567</li>
            </ul>
            </div> 
    </div>
  )
}

export default About1
