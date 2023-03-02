# **Using Architecture ---- MVVM**

## View - ViewController - ViewModel - Mode

- View: only view layer, displaying user input and output
- ViewController: it has all View related logic and owns a reference to the ViewModel. Handle user input and pass clean and prepared data to the ViewModel.
- ViewModel: Every dependency needed by the ViewModel will be injected through the constructor, thus making it easy to test. The ViewModel is interacting directly with the Model and whenever the ViewModel updates it, all changes will be automatically reflected back to the View.
- Model: It shouldn’t have any other logic except one that actually updates a model and doesn’t have any side effects.

# **e2e - Detox**

# **Languages**

# **FastLane - Automation build and release**
