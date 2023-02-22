import styles from '@/components/Pages/About/About.module.sass'
import Layout from '@/components/Layout/Layout'

const About = () => {

  return (
    <div className={styles.about}>
        <Layout >
            <div className={styles.content}>
                <div>
                    <h2>Quem está por trás do curso</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Faucibus molestie arcu vitae faucibus mauris in mi sit enim. Sit tellus non scelerisque gravida blandit sit posuere. Mauris tristique facilisis dignissim accumsan nunc consequat. Felis vitae est faucibus diam cras sed gravida aliquet cum. Non convallis sed imperdiet massa enim velit lectus. Nisl semper massa in enim sit mauris pretium duis. Velit enim sed maecenas ultrices egestas habitasse. Vitae mattis quis cursus odio leo sagittis scelerisque.</p>

                    <p> Tortor dui eget pulvinar feugiat eros cras nunc quam at. Sit facilisis quis porta ut. Vestibulum fermentum ut libero eu integer sit eget. Pellentesque aliquet gravida eleifend vitae maecenas odio at suscipit neque. Pellentesque feugiat a in eu amet purus pellentesque egestas diam.
                    Amet pellentesque sagittis maecenas at. </p>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default About