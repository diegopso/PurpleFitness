angular.module('starter.directives', [])

.directive('ngMaskCurrency', function() {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {

			var toMoney = function(n, c, d, t) { 
				c = isNaN(c = Math.abs(c)) ? 2 : c;
				d = d === undefined ? "." : d;
				t = t === undefined ? "," : t;

				var s = n < 0 ? "-" : "", 
				i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
				j = (j = i.length) > 3 ? j % 3 : 0;
				return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
			};

			var toFloat = function(text) {
				text = text.replace(/\./g, '');
				text = text.replace(',', '.');
				return parseFloat(text);
			};

			var toText = function(text) {
				text = text.replace(/\./g, '');
				text = text.replace(',', '');
				return text;
			};

			element.bind('keyup', function () {
				scope.$apply(function() {
					var value = element.val();
					value = toText(value);
					value = toFloat(value);
					value = toMoney(value, 2, ',', '.');
					element.val(value);
				});
			});
		}
	};
});
