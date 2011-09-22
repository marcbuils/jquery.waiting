/**
 * jQuery.waiting: Patientez un certain temps depuis le dernier appel
 * http://www.marcbuils.fr
 * 
 * Par Marc Buils ( mbuils@marcbuils.fr )
 * Sous licence LGPL v3 (http://www.gnu.org/licenses/lgpl-3.0.txt)
 *
 * Compression js: http://javascriptcompressor.com/
 * 
 * V0.1.0:
 * - First release
 */
(function($){
$.fn.waiting = function( p_delay ){
	var $_this = this.first();
	var _return = $.Deferred();
	var _handle = null;

	if ( $_this.data('waiting') != undefined ) {
		$_this.data('waiting').rejectWith( $_this );
		$_this.removeData('waiting');
	}
	$_this.data('waiting', _return);

	_handle = setTimeout(function(){
		_return.resolveWith( $_this );
	}, p_delay );

	_return.fail(function(){
		clearTimeout(_handle);
	});

	return _return.promise();
};
})(jQuery);
