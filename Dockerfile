FROM python:3.13.4-slim-bullseye AS base

LABEL maintainer="ikehunter.com"

# see logs immediately
ENV PYTHONUNBUFFERED 1

WORKDIR /server

# default to production
ARG DEV=false

# Base OS dependencies
RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apt-get update && \
    apt install -f && \
    apt-get install -y --no-install-recommends libpq-dev gcc g++ postgresql

COPY ./requirements.txt /tmp/requirements.txt
COPY ./requirements.prod.txt /tmp/requirements.prod.txt
COPY ./requirements.dev.txt /tmp/requirements.dev.txt

# Install pip requirements
RUN /py/bin/pip install -r /tmp/requirements.txt && /py/bin/pip install -r /tmp/requirements.prod.txt && \
    if [ $DEV = "true" ]; \
        then /py/bin/pip install -r /tmp/requirements.dev.txt ; \
    fi && \
    rm -rf /tmp

COPY ./scripts /scripts

# Create a user to run the server
RUN adduser --no-create-home --system --disabled-password --disabled-login --group django-user && \
    mkdir -p /vol/static/media && \
    mkdir -p /vol/static/static && \
    chown -R django-user:django-user /vol && \
    chmod -R 755 /vol/static && \
    chmod -R +x /scripts && \
    if [ $DEV = "true" ]; \
        # create a tmp directory for debugging
        then mkdir /tmp && chown -R django-user:django-user /tmp ; \
    fi

# Copy the server into the container
COPY ./server /server
ENV PATH="/scripts:/py/bin:/usr/bin:$PATH"

# Switch to the django-user and run the server
USER django-user
VOLUME /vol/web
CMD ["entrypoint.sh"]
