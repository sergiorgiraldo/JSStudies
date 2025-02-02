export default (props) => (
	<Show when={props.errors}>
		<ul class="error-messages">
			<For each={Object.keys(props.errors)}>
				{(key) => (
					<li>
						{key} {props.errors[key]}
					</li>
				)}
			</For>
		</ul>
	</Show>
);
