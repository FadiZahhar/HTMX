/**
 * Renders a location item as an HTML string.
 *
 * The rendered HTML includes:
 * - A list item (`<li>`) with the class `location-item`.
 * - A button that triggers an HTMX `hx-post` request to the `/places` endpoint with the location ID as a parameter.
 * - An image element displaying the location's image.
 * - A heading element displaying the location's title.
 *
 * HTMX attributes used:
 * - `hx-post`: Specifies the URL to which the POST request is sent.
 * - `hx-vals`: Specifies the values to be sent with the request, in this case, the location ID.
 * - `hx-target`: Specifies the target element where the response will be placed.
 * - `hx-swap`: Specifies how the response will be inserted into the target element.
  */
export default function renderLocation(location, isAvailableLocation = true) {
  let attributes;

  if(isAvailableLocation) {
    attributes = `
      hx-post="/places" 
      hx-vals='{"locationId": "${location.id}"}'
      hx-target="#interesting-locations"
      hx-swap="beforeend"
    `;
  } else {
    attributes = `
      hx-delete="/places/${location.id}" 
      hx-confirm="Are you sure?"
      hx-target="closest li"
      hx-swap="outerHTML"
    `;
  }

  return `
    <li class="location-item">
      <button ${attributes}>
        <img src="${`/images/${location.image.src}`}" alt="${location.image.alt}" />
        <h3>${location.title}</h3>
      </button>
    </li>
  `;
}

