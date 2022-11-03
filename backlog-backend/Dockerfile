FROM ruby:2.7.6

ENV BUNDLE_VERSION 2.2.17
ENV APP /usr/src/app

# netcat is for nc command
# RUN apt add update && apt add install -y netcat && RUN apt add install -y vim
RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client && apt-get install -y netcat
RUN gem install bundler --version "$BUNDLE_VERSION" 

RUN mkdir $APP
WORKDIR $APP

# COPY Gemfile* $APP/
# RUN bundle install
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock

RUN bundle install

COPY . $APP/

CMD ["./bin/server-dev"]
