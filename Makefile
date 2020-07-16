web-up:
	docker run -d -p 3000:3000 walmart-web

web-ini:
	make web-install
	make web-up

web-reset:
	make web-down
	make web-up

web-down:
	docker rm -f walmart-web

web-install:
	docker build -t walmart-web .