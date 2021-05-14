import React from "react";

import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import { atomOneLight, CodeBlock } from "react-code-blocks";

import Button from "../../../components/Button";

import featureHautakchurch from "../../../assets/img/feature-hautakchurch.jpg";
import tinyFeatureHautakchurch from "../../../assets/img/tiny/feature-hautakchurch.jpg";
import workHautakchurch1 from "../../../assets/img/work-hautakchurch-1.jpg";

const Hautakchurch = () => {
  const textIn = {
    initial: {
      y: 100,
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className="work-page custom-container"
    >
      <div className="overflow-wrapper">
        <ProgressiveImage
          src={featureHautakchurch}
          placeholder={tinyFeatureHautakchurch}
        >
          {(src) => (
            <motion.img
              variants={textIn}
              className="work-page__feature-img"
              src={src}
              alt="feature-hautakchurch"
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="work-page__content">
        <div className="overflow-wrapper">
          <motion.h1 variants={textIn} className="work-page__title">
            Hau Tak Church Web
          </motion.h1>
        </div>
        <div className="overflow-wrapper">
          <motion.div variants={textIn} className="section-block">
            <h3 className="work-page__date">Jul 2020 - Sep 2020</h3>
            <div className="work-page__overview">
              <p className="work-page__p">
                Hau Tak Church website was built with Wordpress as CMS. This is
                a custom theme for hautakchurch.org as you may curious about,
                and is developed by using underscores as starter theme.
              </p>
            </div>
            <a
              className="work-page__links"
              target="_blank"
              rel="noreferrer"
              href="https://hautakchurch.org/"
            >
              <Button text="View work" />
            </a>
            <a
              className="work-page__links"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/IamMrandrew/hautakchurch2020-wp-theme"
            >
              <Button text="View GitHub" />
            </a>
          </motion.div>
        </div>
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Features</h2>
          <p className="work-page__p">
            Modern & clean webpage design
            <br />
            Custom post type for more customization <br />
            Custom animated header (navigation bar)
            <br />
            Customize function.php <br />
            Multi-pages templates
          </p>
        </div>
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Webpage Design</h2>
          <p className="work-page__p">
            The website has been rebuilt for many times. It was just a dynamic
            website with PHP as backend hosted with Synology server. If user
            want to edit the content, they have to access to the database
            directly. Also, the design is very old and it is not even
            responsive.
          </p>
          <p className="work-page__p">
            Recently, I planned to rebuild this site into a wordpress based
            site. The reason why I decided to make this decision is because
            using wordpress as CMS provide better user-experience for admin who
            have to constantly update the content.
          </p>
          <p className="work-page__p">
            The approach is start is to create a custom theme from Underscores.
            Also, I would like to make some changes on the design and the
            styling of the content to make the site more attractive.
          </p>
        </div>
        <img
          className="work-page__img"
          src={workHautakchurch1}
          alt="work-hautakchurch-1"
        />
        <div className="work-page__para">
          <h2 className="work-page__subtitle">Content Management System</h2>
          <p className="work-page__p">
            As this project targets the needed of the church, which required to
            upload audios and edit notices frequency. I chose wordpress as the
            CMS while develop my own theme for fully customization.
          </p>
          <p className="work-page__p">
            Moreover, for the audio recordings. I created a custom post type for
            it with customized metadata. This allowed the user the upload the
            recordings which fit in into the recordings componenets template
            that I designed. Same for the events, activities and documents,.
          </p>
        </div>
        <div className="work-page__para">
          <h3 className="work-page__bold">Adding hooks for custom post type</h3>
          <div className="work-page__code">
            <CodeBlock
              text={`// Custom Post Type Recording
function recording() {
  $labels = array (
    'name'				=> '講道錄音',
    'singular_name' 	=> '講道錄音',
    'menu_name'			=> '講道錄音',
    'add_new_item' 		=> '添加講道錄音',
    'add_new' 			=> '添加新的講道錄音',
    );
  $args = array (
    'label'				=> __('recording'),
    'labels'			=> $labels,
    'supports'			=> array('title', 'editor', 'thumbnail'),
    'show_in_rest' 		=> true,
    'public'			=> true,
    'show_ui'			=> true,
    'capability_type'	=> 'post',
    'menu_icon'			=> 'dashicons-format-audio',
    'taxonomies'          => array( 'category' )
    );
  register_post_type('recording',$args);

}

add_action('init', 'recording');`}
              language={"php"}
              showLineNumbers={false}
              theme={atomOneLight}
              codeBlock
            />
          </div>
          <h3 className="work-page__bold">
            Adding hooks for custom post type metadata
          </h3>
          <div className="work-page__code">
            <CodeBlock
              text={`function recording_add_meta_box() {
  add_meta_box( 'recording_meta', '資料', 'recording_meta_callback', 'recording','side');
}

function recording_meta_callback($post) {
  wp_nonce_field('save_recording_meta_data', 'recording_meta_metabox_nounce');

  $value = get_post_meta($post->ID, '_preacher_name_value_key', true);
  echo '<label for="preacher_name_field" style="padding: 5px 3px; display: block">講員</label>';
  echo '<input type="text" id="preacher_name_field" name="preacher_name_field" style="margin-bottom: 10px" value="' .esc_attr($value).'" />';

  $value2 = get_post_meta($post->ID, '_bible_verse_value_key', true);
  echo '<label for="bible_verse_field" style="padding: 5px 3px; display: block">經文</label>';
  echo '<input type="text" id="bible_verse_field" name="bible_verse_field" value="' .esc_attr($value2).'" />';

}

add_action('add_meta_boxes', 'recording_add_meta_box');`}
              language={"php"}
              showLineNumbers={false}
              theme={atomOneLight}
              codeBlock
            />
          </div>
          <p className="work-page__p">
            There are more and more features and ideas included in this theme.
            Feel free to explore more...
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Hautakchurch;
