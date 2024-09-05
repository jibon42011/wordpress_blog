<?php
/**
 * Template for search form.
 * @package themify
 * @since 1.0.0
 */
global $tf_isWidget, $tf_search_placeholder;
$search_form=isset($tf_isWidget)?'search_form':themify_get('setting_search_form','search_form',true);
if($search_form==='search_form'){
	Themify_Enqueue_Assets::loadThemeStyleModule('search-form');
}
$placeholder = ! empty( $tf_search_placeholder ) ? $tf_search_placeholder : __( 'Search', 'themify' );
$disable_ajax = isset( $tf_isWidget ) && $tf_isWidget === false;
if ( $disable_ajax === false ) {
    $disable_ajax = ! ( 'search_form' === themify_get('setting_search_form',false,true) && themify_check('setting_search_ajax_form',true) );
}
?>
<div class="tf_search_form <?php echo $search_form!=='search_form'?'tf_search_overlay':'tf_s_dropdown'?>"<?php if($search_form==='search_form'):?> data-lazy="1"<?php if ( $disable_ajax ) : ?> data-ajax=""<?php endif;?><?php endif;?>>
    <form role="search" method="get" id="searchform" class="tf_rel <?php if($search_form!=='search_form'):?> tf_hide<?php endif;?>" action="<?php echo home_url('/'); ?>">
            <div class="tf_icon_wrap icon-search"><?php echo themify_get_icon(themify_get('setting-ic-search','ti-search',true),null,false,false,array('aria-label'=>__('Search','themify'))); ?></div>
            <input type="text" name="s" id="s" title="<?php _e( 'Search', 'themify' ); ?>" placeholder="<?php echo esc_attr( $placeholder ); ?>" value="<?php echo $search_form !== 'search_form' && themify_theme_show_area( 'search_form' )?'':get_search_query(); ?>" />

            <?php if(themify_is_woocommerce_active() && 'product' === themify_get( 'setting-search_post_type','all',true )): ?>
                    <input type="hidden" name="post_type" value="product" />
            <?php endif; ?>

        <?php themify_search_fields(); ?>

    </form>
</div>
<?php $tf_isWidget=null; unset( $tf_search_placeholder ); ?>